# Site de venda dos livros — guia rápido

Custo: **R$ 0** de hospedagem. Você paga apenas as taxas por venda do Mercado Pago (impresso) e da Hotmart/Gumroad (e-book).

## Arquivos

| Arquivo | O que é | Precisa editar? |
| --- | --- | --- |
| `dados.js` | Autor, contatos, frete e **todos os livros** | **Sim, só este** |
| `index.html` | Página inicial com catálogo | Só para mudar os textos fixos (título "Histórias para ler devagar", "Como comprar") |
| `livro.html` | Página de cada livro (montada a partir de `dados.js`) | Não |
| `estilo.css` / `app.js` | Visual e funcionamento | Não |
| `capas/` | Coloque aqui as imagens das capas | Sim |

## 1. Preencher seus dados

Abra `dados.js` no Bloco de Notas (ou VS Code) e troque:

- `nome`, `bio`, `whatsapp` (só dígitos: `5511999998888`), `email`, `instagram`.
- Em cada livro: título, sinopse, preços e **links de pagamento**.
- Capa: salve a imagem em `capas/` (proporção 2:3, ex. 800×1200 px, JPG) e escreva `capa: "capas/nome-do-arquivo.jpg"`. Sem imagem, o site gera uma capa tipográfica na cor do campo `cor`.
- Livro só impresso → `digital: null`. Só e-book → `fisico: null`.
- Para **adicionar um livro**, copie um bloco `{ ... },` inteiro e altere. O `id` deve ser único, sem espaços nem acentos.
- Use `destaque: true` em um livro para ele aparecer grande no topo.

Para conferir, dê dois cliques em `index.html` — abre no navegador sem precisar de internet.

## 2. Criar os links de pagamento

**Livro impresso — Mercado Pago (Link de Pagamento)**
1. App ou site do Mercado Pago → *Seu negócio* → *Link de pagamento* (ou *Cobrar* → *Link de pagamento*).
2. Nome = título do livro, valor = preço **com frete incluso**, ative "pedir endereço/dados do comprador".
3. Copie o link (`https://mpago.la/...`) e cole em `fisico.link`.
4. Você recebe aviso de cada venda e envia pelos Correios ou Melhor Envio.

> Frete fixo embutido é o jeito mais simples sem loja virtual. Se preferir cobrar à parte, mude o texto `freteInfo` para "frete combinado pelo WhatsApp após a compra".

**E-book — Hotmart ou Gumroad**
1. Cadastre o produto digital e faça upload do PDF/ePub.
2. Copie o link de checkout e cole em `digital.link`. A entrega ao comprador é automática.

## 3. Publicar grátis no GitHub Pages

1. Crie uma conta em github.com.
2. Clique em **New repository**. Nome: `livros` (ou `seuusuario.github.io` para o site ficar no endereço principal). Marque **Public** → *Create*.
3. Na página do repositório: **Add file → Upload files**, arraste todo o conteúdo da pasta `site-livros` (incluindo a pasta `capas`) → *Commit changes*.
4. **Settings → Pages** → em *Branch* escolha `main` e `/ (root)` → *Save*.
5. Em 1–2 minutos o site estará em `https://seuusuario.github.io/livros/`.

Para atualizar depois: edite `dados.js` direto no GitHub (ícone de lápis) ou faça upload da versão nova. O site muda em ~1 minuto.

**Domínio próprio (opcional, ~R$ 40/ano no registro.br):** Settings → Pages → *Custom domain*, e siga as instruções de DNS. A hospedagem continua gratuita.
