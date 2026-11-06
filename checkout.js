/* Janela de compra: dados do comprador + Pix (QR Code / copia e cola) ou cartão.
   Normalmente não precisa editar este arquivo. Configure o Pix em dados.js. */
(function () {
  const S = window.SITE, A = S.autor, PIX = A.pix || {};
  const dlg = document.getElementById("checkout");
  if (!dlg) return;

  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const semAcento = (t) => String(t || "").normalize("NFD").replace(/[̀-ͯ]/g, "");

  /* ---------- Pix: código "copia e cola" (padrão BR Code do Banco Central) ---------- */
  const campo = (id, v) => id + String(v.length).padStart(2, "0") + v;
  function crc16(s) {
    let c = 0xffff;
    for (let i = 0; i < s.length; i++) {
      c ^= s.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) c = c & 0x8000 ? ((c << 1) ^ 0x1021) & 0xffff : (c << 1) & 0xffff;
    }
    return c.toString(16).toUpperCase().padStart(4, "0");
  }
  function pixCopiaECola(valor, txid) {
    const nome = semAcento(PIX.nome).toUpperCase().replace(/[^A-Z0-9 ]/g, "").slice(0, 25) || "VENDEDOR";
    const cidade = semAcento(PIX.cidade).toUpperCase().replace(/[^A-Z0-9 ]/g, "").slice(0, 15) || "BRASIL";
    const p =
      campo("00", "01") +
      campo("26", campo("00", "br.gov.bcb.pix") + campo("01", PIX.chave.trim())) +
      campo("52", "0000") + campo("53", "986") + campo("54", valor.toFixed(2)) +
      campo("58", "BR") + campo("59", nome) + campo("60", cidade) +
      campo("62", campo("05", (txid || "***").replace(/[^A-Za-z0-9]/g, "").slice(0, 25) || "***")) +
      "6304";
    return p + crc16(p);
  }

  /* ---------- envio do pedido (WhatsApp ou e-mail do autor) ---------- */
  function enviarPedido(texto, assunto) {
    if (A.whatsapp) window.open(`https://wa.me/${A.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
    else if (A.email) location.href = `mailto:${A.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;
    else alert("O autor ainda não configurou WhatsApp ou e-mail para receber pedidos.");
  }
  const canal = A.whatsapp ? "WhatsApp" : "e-mail";

  /* ---------- janela ---------- */
  let pedido = null;
  // Cartão só aparece quando o livro tem um link de pagamento real (não o de exemplo).
  const temCartao = (o) => !!(o && o.link && !/SEU-LINK/i.test(o.link));
  function abrir(livro, tipo) {
    const o = livro[tipo];
    pedido = { livro, tipo, oferta: o, rotulo: tipo === "fisico" ? "Livro impresso" : "E-book" };
    const imp = tipo === "fisico";
    if (o.pedido) return abrirPedidoGratis(livro);
    dlg.innerHTML = `
      <form class="ck" method="dialog" novalidate>
        <button type="button" class="ck-fechar" aria-label="Fechar">×</button>
        <p class="sobretitulo">${pedido.rotulo}</p>
        <h2>${esc(livro.titulo)}</h2>
        <p class="ck-total">${brl(o.preco)}${imp ? ` <small>frete incluso</small>` : ""}</p>

        <fieldset>
          <legend>Seus dados</legend>
          <label class="ck-l">Nome completo<input name="nome" required autocomplete="name"></label>
          <div class="ck-2">
            <label class="ck-l">E-mail<input name="email" type="email" required autocomplete="email"></label>
            <label class="ck-l">WhatsApp${imp ? "" : " <i>(opcional)</i>"}<input name="fone" type="tel" ${imp ? "required" : ""} autocomplete="tel" placeholder="(45) 99999-9999"></label>
          </div>
          ${imp ? `
          <div class="ck-2">
            <label class="ck-l">CEP<input name="cep" required inputmode="numeric" autocomplete="postal-code" placeholder="00000-000"></label>
            <label class="ck-l">Número<input name="numero" required></label>
          </div>
          <label class="ck-l">Endereço<input name="rua" required autocomplete="address-line1"></label>
          <div class="ck-2">
            <label class="ck-l">Complemento <i>(opcional)</i><input name="compl" autocomplete="address-line2"></label>
            <label class="ck-l">Bairro<input name="bairro" required></label>
          </div>
          <div class="ck-2">
            <label class="ck-l">Cidade<input name="cidade" required autocomplete="address-level2"></label>
            <label class="ck-l">UF<input name="uf" required maxlength="2" autocomplete="address-level1"></label>
          </div>` : `<p class="ck-nota">O e-book (PDF) será enviado para este e-mail após a confirmação do pagamento.</p>`}
        </fieldset>

        <fieldset>
          <legend>Forma de pagamento</legend>
          <div class="ck-formas">
            <label class="ck-forma"><input type="radio" name="forma" value="pix" checked><span><b>Pix</b>QR Code ou copia e cola · aprovação imediata</span></label>
            ${temCartao(o) ? `<label class="ck-forma"><input type="radio" name="forma" value="cartao"><span><b>Cartão de crédito</b>em ambiente seguro do Mercado Pago · pode parcelar</span></label>` : ""}
          </div>
        </fieldset>

        <button type="submit" class="btn cheio">Continuar</button>
      </form>`;
    dlg.querySelector(".ck-fechar").onclick = () => dlg.close();
    const f = dlg.querySelector("form");
    if (imp) {
      const cep = f.cep;
      cep.addEventListener("input", async () => {
        const d = cep.value.replace(/\D/g, "");
        if (d.length !== 8) return;
        try {
          const r = await (await fetch(`https://viacep.com.br/ws/${d}/json/`)).json();
          if (r.erro) return;
          f.rua.value ||= r.logradouro || ""; f.bairro.value ||= r.bairro || "";
          f.cidade.value = r.localidade || f.cidade.value; f.uf.value = r.uf || f.uf.value;
          f.numero.focus();
        } catch (e) { /* sem internet: preenchimento manual */ }
      });
    }
    f.addEventListener("submit", (ev) => {
      ev.preventDefault();
      if (!f.reportValidity()) return;
      pedido.dados = Object.fromEntries(new FormData(f));
      pedido.dados.forma === "pix" ? passoPix() : passoCartao();
    });
    dlg.showModal();
  }

  /* ---------- e-book gratuito enviado sob pedido ---------- */
  function abrirPedidoGratis(livro) {
    dlg.innerHTML = `
      <form class="ck" method="dialog" novalidate>
        <button type="button" class="ck-fechar" aria-label="Fechar">×</button>
        <p class="sobretitulo">E-book gratuito</p>
        <h2>${esc(livro.titulo)}</h2>
        <p class="ck-nota">Preencha seus dados e envie o pedido. O e-book (PDF) chega no seu e-mail, sem custo.</p>
        <fieldset>
          <legend>Seus dados</legend>
          <label class="ck-l">Nome completo<input name="nome" required autocomplete="name"></label>
          <div class="ck-2">
            <label class="ck-l">E-mail<input name="email" type="email" required autocomplete="email"></label>
            <label class="ck-l">WhatsApp <i>(opcional)</i><input name="fone" type="tel" autocomplete="tel" placeholder="(45) 99999-9999"></label>
          </div>
        </fieldset>
        <button type="submit" class="btn cheio">Enviar pedido pelo ${canal}</button>
      </form>`;
    dlg.querySelector(".ck-fechar").onclick = () => dlg.close();
    const f = dlg.querySelector("form");
    f.addEventListener("submit", (ev) => {
      ev.preventDefault();
      if (!f.reportValidity()) return;
      const d = Object.fromEntries(new FormData(f));
      const texto = [`*Pedido de e-book gratuito pelo site*`, `Livro: ${livro.titulo}`, ``, `Nome: ${d.nome}`, `E-mail: ${d.email}`]
        .concat(d.fone ? [`WhatsApp: ${d.fone}`] : []).join("\n");
      enviarPedido(texto, `Pedido de e-book: ${livro.titulo}`);
      dlg.innerHTML = `
        <div class="ck ck-fim">
          <button type="button" class="ck-fechar" aria-label="Fechar">×</button>
          <p class="sobretitulo">Pedido enviado</p>
          <h2>Obrigado, ${esc(d.nome.split(" ")[0])}!</h2>
          <p>O e-book será enviado para <b>${esc(d.email)}</b>.</p>
          <button type="button" class="btn cheio" id="ck-ok">Fechar</button>
        </div>`;
      dlg.querySelector(".ck-fechar").onclick = () => dlg.close();
      dlg.querySelector("#ck-ok").onclick = () => dlg.close();
    });
    dlg.showModal();
  }

  function resumo(forma) {
    const d = pedido.dados, l = pedido.livro;
    const linhas = [
      `*Novo pedido pelo site*`,
      `Livro: ${l.titulo} (${pedido.rotulo})`,
      `Valor: ${brl(pedido.oferta.preco)}`,
      `Pagamento: ${forma}`,
      ``,
      `Nome: ${d.nome}`, `E-mail: ${d.email}`
    ];
    if (d.fone) linhas.push(`WhatsApp: ${d.fone}`);
    if (pedido.tipo === "fisico")
      linhas.push(``, `Endereço de entrega:`, `${d.rua}, ${d.numero}${d.compl ? " - " + d.compl : ""}`, `${d.bairro} - ${d.cidade}/${d.uf}`, `CEP ${d.cep}`);
    return linhas.join("\n");
  }

  function voltar() {
    const b = dlg.querySelector(".ck-voltar");
    if (b) b.onclick = () => abrir(pedido.livro, pedido.tipo);
    dlg.querySelector(".ck-fechar").onclick = () => dlg.close();
  }

  function passoPix() {
    const l = pedido.livro, valor = pedido.oferta.preco;
    if (!PIX.chave) {
      dlg.querySelector("form").insertAdjacentHTML("beforeend", `<p class="ck-erro">O Pix ainda não foi configurado pelo autor. Escolha cartão ou fale pelo ${canal}.</p>`);
      return;
    }
    const codigo = pixCopiaECola(valor, l.id);
    dlg.innerHTML = `
      <div class="ck">
        <button type="button" class="ck-fechar" aria-label="Fechar">×</button>
        <p class="sobretitulo">Pagamento via Pix</p>
        <h2>${brl(valor)}</h2>
        <p class="ck-nota">Abra o app do seu banco, escolha <b>Pix → Pagar com QR Code</b> e aponte a câmera. No celular, use o <b>copia e cola</b>.</p>
        <div class="ck-qr" id="ck-qr" aria-label="QR Code Pix"></div>
        <p class="ck-favorecido">Favorecido: <b>${esc(PIX.nome)}</b></p>
        <label class="ck-l">Pix copia e cola
          <textarea readonly rows="3" class="ck-codigo">${esc(codigo)}</textarea></label>
        <button type="button" class="btn sec cheio" id="ck-copiar">Copiar código Pix</button>
        <div class="ck-passo">
          <p><b>Depois de pagar</b>, envie o pedido para o autor confirmar e ${pedido.tipo === "fisico" ? "postar o livro" : "enviar o e-book"}. Se puder, anexe o comprovante.</p>
          <button type="button" class="btn cheio" id="ck-enviar">Já paguei · enviar pedido pelo ${canal}</button>
        </div>
        <button type="button" class="ck-voltar">← Voltar e corrigir dados</button>
      </div>`;
    voltar();
    const alvo = dlg.querySelector("#ck-qr");
    if (window.QRCode) new QRCode(alvo, { text: codigo, width: 220, height: 220, correctLevel: QRCode.CorrectLevel.M });
    else alvo.textContent = "Não foi possível desenhar o QR Code. Use o copia e cola abaixo.";
    dlg.querySelector("#ck-copiar").onclick = async (e) => {
      try { await navigator.clipboard.writeText(codigo); }
      catch (_) { const t = dlg.querySelector(".ck-codigo"); t.select(); document.execCommand("copy"); }
      e.target.textContent = "Código copiado ✓";
    };
    dlg.querySelector("#ck-enviar").onclick = () => {
      enviarPedido(resumo("Pix"), `Pedido: ${l.titulo}`);
      concluido();
    };
  }

  function passoCartao() {
    const l = pedido.livro;
    dlg.innerHTML = `
      <div class="ck">
        <button type="button" class="ck-fechar" aria-label="Fechar">×</button>
        <p class="sobretitulo">Pagamento com cartão</p>
        <h2>${brl(pedido.oferta.preco)}</h2>
        <ol class="ck-lista">
          <li><b>Envie o pedido</b> com seus dados para o autor.
            <button type="button" class="btn sec cheio" id="ck-enviar">Enviar pedido pelo ${canal}</button></li>
          <li><b>Pague com cartão</b> na página segura do Mercado Pago (abre em nova aba). Seus dados de cartão não passam por este site.
            <a class="btn cheio" id="ck-pagar" href="${esc(pedido.oferta.link)}" target="_blank" rel="noopener">Pagar com cartão</a></li>
        </ol>
        <button type="button" class="ck-voltar">← Voltar e corrigir dados</button>
      </div>`;
    voltar();
    dlg.querySelector("#ck-enviar").onclick = (e) => {
      enviarPedido(resumo("Cartão (Mercado Pago)"), `Pedido: ${l.titulo}`);
      e.target.textContent = "Pedido enviado ✓";
    };
  }

  function concluido() {
    const fis = pedido.tipo === "fisico";
    dlg.innerHTML = `
      <div class="ck ck-fim">
        <button type="button" class="ck-fechar" aria-label="Fechar">×</button>
        <p class="sobretitulo">Pedido enviado</p>
        <h2>Obrigado, ${esc(pedido.dados.nome.split(" ")[0])}!</h2>
        <p>Assim que o Pix for confirmado, ${fis ? "o livro será postado pelos Correios e você receberá o código de rastreio" : "o e-book será enviado para <b>" + esc(pedido.dados.email) + "</b>"}.</p>
        <button type="button" class="btn cheio" id="ck-ok">Fechar</button>
      </div>`;
    voltar();
    dlg.querySelector("#ck-ok").onclick = () => dlg.close();
  }

  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-comprar]");
    if (!b) return;
    const l = S.livros.find((x) => x.id === b.dataset.livro);
    if (l) abrir(l, b.dataset.comprar);
  });
})();
