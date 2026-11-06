/* Lógica do site — normalmente não precisa editar este arquivo. */
(function () {
  const S = window.SITE;
  const A = S.autor;
  const $ = (s) => document.querySelector(s);

  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const iniciais = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
  const whatsLink = (msg) => `https://wa.me/${A.whatsapp}?text=${encodeURIComponent(msg)}`;

  function capa(l) {
    if (l.capa) return `<div class="capa"><img src="${esc(l.capa)}" alt="Capa de ${esc(l.titulo)}" loading="lazy"></div>`;
    return `<div class="capa" style="background:${esc(l.cor || "#3a3a3a")}" role="img" aria-label="Capa de ${esc(l.titulo)}">
      <div class="capa-tipo"><span class="ct-gen">${esc(l.genero || "")}</span><span class="ct-tit">${esc(l.titulo)}</span><span class="ct-aut">${esc(A.nome)}</span></div></div>`;
  }

  function etiquetas(l) {
    let h = "";
    const valor = (o) => (o.preco ? brl(o.preco) : "grátis");
    if (l.fisico) h += `<span class="etq">Impresso ${valor(l.fisico)}</span>`;
    if (l.digital) h += `<span class="etq">E-book ${valor(l.digital)}</span>`;
    return `<div class="etiquetas">${h}</div>`;
  }

  // Elementos comuns (topo, rodapé, WhatsApp)
  document.querySelectorAll("[data-autor]").forEach((el) => (el.textContent = A.nome));
  document.title = document.title.replace("{autor}", A.nome);
  const ano = $("#ano"); if (ano) ano.textContent = new Date().getFullYear();
  const contatos = $("#contatos");
  if (contatos) {
    contatos.innerHTML = [
      A.whatsapp && `<a href="${whatsLink("Olá! Vim pelo site.")}" target="_blank" rel="noopener">WhatsApp</a>`,
      A.email && `<a href="mailto:${esc(A.email)}">${esc(A.email)}</a>`,
      A.instagram && `<a href="https://instagram.com/${esc(A.instagram)}" target="_blank" rel="noopener">@${esc(A.instagram)}</a>`
    ].filter(Boolean).join("");
  }
  const wf = $("#whats");
  if (wf && A.whatsapp) wf.href = whatsLink("Olá! Vim pelo site e tenho uma dúvida sobre os livros.");
  else if (wf) wf.remove();

  /* ---------------- página inicial ---------------- */
  if ($("#grade")) {
    $("#bio").textContent = A.bio;
    $("#assinatura").textContent = A.assinatura;
    $("#foto").innerHTML = A.foto ? `<img src="${esc(A.foto)}" alt="${esc(A.nome)}">` : esc(iniciais(A.nome));
    $("#frete-home").textContent = S.freteInfo;

    const dest = S.livros.find((l) => l.destaque) || S.livros[0];
    if (dest) {
      $("#destaque").innerHTML = `<a href="livro.html?id=${encodeURIComponent(dest.id)}" style="font-size:20px">${capa(dest)}</a>`;
      $("#destaque-link").href = `livro.html?id=${encodeURIComponent(dest.id)}`;
      $("#destaque-titulo").textContent = dest.titulo;
    }

    const render = (filtro) => {
      const lista = S.livros.filter((l) => filtro === "todos" || (filtro === "fisico" ? l.fisico : l.digital));
      $("#grade").innerHTML = lista.length
        ? lista.map((l) => `<a class="cartao" href="livro.html?id=${encodeURIComponent(l.id)}">${capa(l)}
            <div><h3>${esc(l.titulo)}</h3><div class="meta">${esc(l.genero || "")}${l.ano ? " · " + l.ano : ""}</div>${etiquetas(l)}</div></a>`).join("")
        : `<p class="vazio">Nenhum livro neste formato ainda.</p>`;
    };
    document.querySelectorAll(".filtros button").forEach((b) =>
      b.addEventListener("click", () => {
        document.querySelectorAll(".filtros button").forEach((x) => x.setAttribute("aria-pressed", x === b));
        render(b.dataset.f);
      })
    );
    $("#total").textContent = S.livros.length;
    render("todos");
  }

  /* ---------------- página do livro ---------------- */
  if ($("#livro")) {
    const id = new URLSearchParams(location.search).get("id");
    const l = S.livros.find((x) => x.id === id);
    if (!l) {
      $("#livro").innerHTML = `<h1>Livro não encontrado</h1><p><a href="index.html">Voltar ao catálogo</a></p>`;
      return;
    }
    document.title = `${l.titulo} — ${A.nome}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = l.chamada || l.titulo;

    const paragrafos = (l.sinopse || "").split(/\n\s*\n/).map((p) => `<p>${esc(p)}</p>`).join("");
    const proprio = (o) => o && !o.externo && !o.gratis && o.preco > 0;
    const oferta = (tipo, o, rotulo, botao) => o ? `<div class="oferta"><span class="tipo">${rotulo}</span>
        <span class="preco">${o.preco ? brl(o.preco) : "Gratuito"}</span><span class="det">${esc(o.detalhes || "")}</span>
        ${proprio(o) || o.pedido
          ? `<button type="button" class="btn cheio" data-comprar="${tipo}" data-livro="${esc(l.id)}">${esc(o.botao || botao)}</button>`
          : `<a class="btn cheio" href="${esc(o.link)}" target="_blank" rel="noopener">${esc(o.botao || botao)}</a>`}</div>` : "";
    const pagto = [
      (proprio(l.fisico) || proprio(l.digital)) && (
        [l.fisico, l.digital].some((o) => proprio(o) && o.link && !/SEU-LINK/i.test(o.link))
          ? "Pague com Pix (QR Code na própria página) ou cartão de crédito pelo Mercado Pago."
          : "Pagamento por Pix, com QR Code e copia e cola na própria página."),
      proprio(l.digital) && "O e-book chega no seu e-mail logo após a confirmação.",
      l.digital && l.digital.pedido && "E-book gratuito: preencha seu nome e e-mail, envie o pedido e o arquivo chega no seu e-mail.",
      l.digital && l.digital.gratis && !l.digital.pedido && "Download livre, sem cadastro. Se puder, compartilhe com quem se interessa pelo tema.",
      l.editoraLink && `Mais informações no <a href="${esc(l.editoraLink)}" target="_blank" rel="noopener">site da ${esc(l.editora || "editora")}</a>.`
    ].filter(Boolean).join(" ");

    $("#livro").innerHTML = `
      <div class="livro-grade">
        ${capa(l)}
        <div>
          <p class="sobretitulo">${esc(l.genero || "")}</p>
          <h1>${esc(l.titulo)}</h1>
          ${l.subtitulo ? `<p class="sub">${esc(l.subtitulo)}</p>` : ""}
          <div class="ficha">
            <span>${esc(l.autores || A.nome)}</span>
            ${l.colecao ? `<span>${esc(l.colecao)}</span>` : ""}
            ${l.editora ? `<span>${esc(l.editora)}</span>` : ""}
            ${l.ano ? `<span>${l.ano}</span>` : ""}
            ${l.paginas ? `<span>${l.paginas} páginas</span>` : ""}
          </div>
          <div class="sinopse">${paragrafos}</div>
          ${l.trecho ? `<blockquote class="trecho">${esc(l.trecho)}</blockquote>` : ""}
          <div class="ofertas">
            ${oferta("fisico", l.fisico, "Livro impresso", "Comprar impresso")}
            ${oferta("digital", l.digital, "E-book", "Comprar e-book")}
          </div>
          ${pagto ? `<p class="pagto">${pagto}</p>` : ""}
          ${proprio(l.fisico) ? `<p class="aviso-frete">${esc(S.freteInfo)}</p>` : ""}
          ${A.whatsapp ? `<p style="margin-top:24px"><a class="btn sec" href="${whatsLink(`Olá! Tenho interesse no livro "${l.titulo}".`)}" target="_blank" rel="noopener">Dúvidas? Fale pelo WhatsApp</a></p>` : ""}
        </div>
      </div>`;
  }
})();
