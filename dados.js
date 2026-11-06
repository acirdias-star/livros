/* ============================================================
   DADOS DO SITE — edite SOMENTE este arquivo para atualizar
   autor, contatos e livros. Não precisa mexer no HTML.
   ============================================================ */

window.SITE = {
  autor: {
    nome: "Acir Dias",
    assinatura: "Pesquisador · Escritor · Professor",
    bio: "Acir Dias da Silva é pesquisador, escritor e professor vinculado à UNIOESTE (Universidade Estadual do Oeste do Paraná) e à PUC Goiás, onde desenvolveu pesquisa de pós-doutorado sob supervisão da Profa. Dra. Maria Aparecida Rodrigues. Seu projeto Trilogia da Presença articula literatura, oralidade e campo etnográfico para dar forma escrita a histórias que raramente chegam ao papel. É autor também do romance O Diário que Escutava o Silêncio e do livro de contos Páginas Mortas das Árvores, ambos publicados em 2025 pela Editora Syntagma.",
    foto: "capas/autor.jpg",
    whatsapp: "5545998071000", // DDI + DDD + número, só dígitos
    email: "acirdias@gmail.com",
    instagram: "", // PREENCHER: sem @

    // PIX — o site gera o QR Code e o "copia e cola" com o valor do livro.
    pix: {
      chave: "76421902987",      // CPF (só dígitos), e-mail, celular (+5545999998888) ou chave aleatória
      nome: "ACIR DIAS DA SILVA", // nome do titular, como aparece no banco (até 25 letras)
      cidade: "CASCAVEL"          // cidade do titular (até 15 letras)
    }
  },

  // Texto exibido para livros físicos sobre o envio
  freteInfo: "Frete fixo para todo o Brasil via Correios, já incluso no valor. Envio em até 3 dias úteis após a confirmação do pagamento, com código de rastreio.",

  /* ------------------------------------------------------------
     LIVROS
     - id: sem espaços nem acentos (vira o endereço da página)
     - capa: caminho da imagem (ex.: "capas/meu-livro.jpg").
             Vazio = capa tipográfica gerada automaticamente.
     - fisico / digital: null se o livro não tem aquele formato
       link: Link de Pagamento do Mercado Pago/PagBank (físico)
             ou link de checkout Hotmart/Gumroad (digital)
     ATENÇÃO: preços e links abaixo são DE TESTE — troque pelos reais.
     ------------------------------------------------------------ */
  livros: [
    {
      id: "escritas-dos-invisiveis",
      titulo: "Escritas dos Invisíveis",
      subtitulo: "Biografias de Quem o Mundo Não Viu",
      genero: "Vol. I · Biografia",
      colecao: "Trilogia da Presença — Volume I · Não ficção · Biografia · Reportagem",
      editora: "Pedro & João Editores",
      capa: "capas/escritas-dos-invisiveis.jpg",
      cor: "#2b2f8a",
      chamada: "Quinze pessoas viveram nas ruas. Quinze vezes o mundo desviou o olhar e os ouvidos.",
      sinopse: "Há uma cena que se repete nas grandes cidades: alguém estendido na calçada, e a multidão passando sem parar. O invisível não é quem não existe — é quem existe demais para ser suportado. Escritas dos Invisíveis nasce de uma decisão contrária: parar, sentar, ouvir.\n\nEntre 2024 e 2025, o pesquisador Acir Dias da Silva percorreu as ruas de São Paulo e Cascavel, chegou até a Missão Belém e à Paróquia São Miguel Arcanjo, e sentou-se diante de quinze pessoas em situação de rua. Não para estudá-las. Para escutá-las. O resultado são quinze biografias literárias — cada uma com nome, voz, memória e ferida próprios.\n\nHá o ex-circense que passou pela Cracolândia e encontrou uma missão. Há a mulher trans que sobreviveu ao que a maioria não sobrevive. Há o tatuado que pediu para não ser nomeado, e cujo silêncio também fala. Há Padre Gilson, in memoriam, que foi morador de rua antes de se tornar o padre dos moradores de rua. Estas páginas não oferecem consolo fácil nem denúncia panfletária. Oferecem algo mais raro: presença.",
      trecho: "Não relatórios, não estatísticas, mas vidas. Escritas dos Invisíveis é o que acontece quando a literatura se recusa a passar por cima.",
      fisico: null,
      digital: { preco: 0, gratis: true, pedido: true, botao: "Faça seu pedido e receba o e-book", detalhes: "E-book gratuito · enviado para o seu e-mail" }
    },
    {
      id: "intermidialidade-dos-invisiveis",
      titulo: "Intermidialidade dos Invisíveis",
      subtitulo: "Entre Literaturas, Imagens e Arte, Corpos e Arquivos",
      genero: "Vol. II · Ensaios",
      colecao: "Trilogia da Presença — Volume II · Não ficção · Ensaios · Crítica cultural",
      editora: "Pedro & João Editores",
      capa: "capas/intermidialidade-dos-invisiveis.jpg",
      cor: "#d9d2c3",
      chamada: "As representações artísticas e midiáticas humanizam ou reforçam estereótipos?",
      sinopse: "Reflexão analítica e crítica sobre como vemos a população de rua. O livro investiga as camadas de mediação que constroem a percepção pública sobre esses indivíduos, analisando obras do cinema, da literatura, da pintura e a cobertura jornalística.\n\nAo confrontar a realidade documental do Volume I com as narrativas ficcionais e jornalísticas, Intermidialidade dos Invisíveis disseca os mecanismos intelectuais e estéticos da invisibilidade social.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, pedido: true, botao: "Faça seu pedido e receba o e-book", detalhes: "E-book gratuito · enviado para o seu e-mail" }
    },
    {
      id: "casa-nazare",
      titulo: "Casa Nazaré",
      subtitulo: "Um Romance de 70 Anos nas Ruas de São Paulo",
      genero: "Vol. III · Romance",
      colecao: "Trilogia da Presença — Volume III · Ficção · Romance social · Drama",
      editora: "Pedro & João Editores",
      capa: "capas/casa-nazare.jpg",
      cor: "#1d1712",
      destaque: true,
      chamada: "Entre três idades, setenta e três anos de rua.",
      sinopse: "Carolina dos Santos Silva tem nove anos quando acorda na pedra da Praça da Sé, sem saber como chegou ali. Tem cinquenta e nove quando começa a anotar os nomes que a cidade apaga. Tem oitenta e dois quando uma chave, a primeira da sua vida, lhe abre a porta do apartamento 701.\n\nCasa Nazaré acompanha Carolina através de um único edifício no centro de São Paulo, sonhado, ocupado, esvaziado e devolvido ao longo de sete décadas. Sonâmbula desde criança, ela atravessa a noite com agulha na mão. O corpo borda o que a memória não alcança. Uma cicatriz nas costas guarda o endereço de onde veio, e ela levará a vida inteira para aprender a lê-la.\n\nCarolina escreve em espasmos de agulha e carvão. Não proclama resistência: anota, borda, guarda. E descobre, tarde, que outras mulheres antes dela fizeram o mesmo, em saco de farinha, quando não havia lápis.",
      trecho: "Sete que dormiam na Praça da Sé numa noite de agosto. A cidade quis que fossem estatística.",
      fisico: { preco: 74.9, link: "https://mpago.la/SEU-LINK", detalhes: "Brochura com orelhas · Pedro & João Editores" },
      digital: { preco: 34.9, link: "https://go.hotmart.com/SEU-LINK", detalhes: "E-book em PDF e ePub" }
    },
    {
      id: "o-diario-que-escutava-o-silencio",
      titulo: "O Diário que Escutava o Silêncio",
      subtitulo: "Um romance de escuta, silêncio e fragmentos poéticos",
      genero: "Romance",
      colecao: "Ficção · Romance",
      editora: "Editora Syntagma",
      ano: 2025,
      paginas: 246,
      capa: "capas/o-diario-que-escutava-o-silencio.jpg",
      cor: "#c98f9b",
      chamada: "Um caderno rosa, dois tempos e o silêncio que só encontra sentido quando compartilhado.",
      sinopse: "Em O Diário que Escutava o Silêncio, cada página é um eco de vozes não ditas e segredos guardados pelo tempo. Quando Isabel, movida por um amor silencioso, oferece a seu irmão Saulo — ou Noá — um caderno rosa, ela não imagina que aquele objeto se tornaria o receptáculo de memórias que resistem ao esquecimento.\n\nNeste romance multitemporal, o diário assume diferentes vozes: em 1982, é narrador-protagonista, testemunhando as hesitações de Saulo, o trauma que o silencia e a tênue esperança de encontrar, nas anotações, um caminho de percalço. Quatro décadas depois, em 2020, o mesmo diário ressurge maduro e filosófico, refletindo sobre o poder transformador da escrita, o elo entre as gerações e o silêncio que só encontra sentido quando compartilhado.\n\nAo longo dos capítulos, emergem bilhetes apagados pelo tempo, bordados que desenham despedidas, objetos que falam no lugar das ausências, fotografias rasgadas e memórias de desertos onde sopram ventos carregados de saudade. Após 43 dias em coma, Saulo desperta para um mundo transformado não apenas pelo isolamento social, mas por algo que mudou dentro dele — fragmentos de memória que o assombram como fios vermelhos entrelaçados em sua consciência.\n\nMais do que uma história de sobrevivência, este livro é uma ode ao ato de escutar: a si mesmo, ao outro, ao silêncio que antecede e transcende a palavra. Uma narrativa poética e reflexiva sobre a fragilidade da memória, a persistência do amor e a capacidade humana de reinventar-se diante do vazio.",
      trecho: "Este livro é feito de restos: de folhas soltas, frases interrompidas, e silêncios que sobreviveram ao tempo. Nada aqui é definitivo. Mas tudo foi escutado com amor.",
      fisico: { preco: 64.9, link: "https://mpago.la/SEU-LINK", detalhes: "246 páginas · Editora Syntagma" },
      digital: { preco: 29.9, link: "https://go.hotmart.com/SEU-LINK", detalhes: "E-book em PDF e ePub" }
    },
    {
      id: "paginas-mortas-das-arvores",
      titulo: "Páginas Mortas das Árvores",
      subtitulo: "15 histórias que preciso te contar antes que desapareça",
      genero: "Contos",
      colecao: "Ficção · Contos",
      editora: "Syntagma Editores",
      ano: 2025,
      paginas: 202,
      capa: "capas/paginas-mortas-das-arvores.jpg",
      cor: "#d9822b",
      chamada: "Cada jornal que Silvério vende é \"uma árvore que já não respira\".",
      sinopse: "A banca de jornais de Silvério Mendes dos Santos já foi um oásis de palavras. Hoje, restam cinco exemplares por manhã e o ronco da geladeira que domina a madrugada. Aos 59 anos, esse \"educador sem canudo\" se apresenta como a última fortaleza de um ofício em extinção, observando a vida no cruzamento da Rua das Palmeiras com a Doutor Arnaldo — entre o vermelho e o verde do semáforo, entre o ronco da cidade e o sussurro das memórias.\n\nEm Páginas Mortas das Árvores, Acir Dias transforma a banca de Silvério num microcosmo assombrado de São Paulo. São quinze narrativas costuradas por um mesmo fio: o declínio do jornal impresso e a urgência desesperada de guardar aquilo que o tempo insiste em devorar. Há o bilhete misterioso da menina do guarda-chuva azul que pode ser filha do narrador, a febre de Estela que migra como herança maldita e a rosa solitária que floresce todos os agostos — mas por quê? Há acidentes de trânsito narrados com a precisão e epifanias devastadoras. Entre prostitutas que guardam segredos, padres em colapso espiritual, caminhoneiros perseguidos pela própria sombra e professores de literatura que morrem lendo, emerge a pergunta que corta como lâmina: o que sobra quando tudo que amamos desaparece?\n\nEscrito com lirismo feroz e ironia que sangra, os contos de Silvério são confissões de um homem à beira do abismo. Como cronista de sua própria extinção, o narrador escreve estas páginas como quem tenta salvar do esquecimento não apenas um amor que o devora por dentro, mas a própria alma de uma cidade canibal.\n\nVocê está sendo convidado a atravessar o semáforo com Silvério. Ouça suas confissões noturnas, reconheça-se nos fantasmas que habitam seus personagens e descubra, entre folhas mortas que ainda pulsam, as raízes que crescem no subsolo da metrópole. Um livro que vai te assombrar. Um livro que você não vai conseguir esquecer.",
      trecho: "Porque mesmo as árvores mortas alimentam o solo para as que virão.",
      fisico: { preco: 59.9, link: "https://mpago.la/SEU-LINK", detalhes: "202 páginas · Syntagma Editores · ISBN 978-65-83934-04-8" },
      digital: { preco: 27.9, link: "https://go.hotmart.com/SEU-LINK", detalhes: "E-book em PDF e ePub" }
    },

    /* ---- Livros publicados pela Pontes Editores (venda/acesso pela editora: externo: true) ---- */
    {
      id: "arte-em-transito",
      titulo: "Arte em Trânsito",
      subtitulo: "Traduções Intermidiáticas no Cinema e na Pintura",
      genero: "Ensaios",
      colecao: "Não ficção · Ensaios · Cinema e pintura",
      editora: "Pontes Editores",
      editoraLink: "https://ponteseditores.com.br/loja3/loja/arte-em-transito-traducoes-intermidiaticas-no-cinema-e-na-pintura-acir-dias/",
      ano: 2025,
      paginas: 552,
      capa: "capas/arte-em-transito.jpg",
      cor: "#111111",
      chamada: "Uma era em que olhar é também resistir.",
      sinopse: "Em Arte em Trânsito: Traduções Intermidiáticas no Cinema e na Pintura, o professor e pesquisador Acir Dias nos conduz por uma travessia estética e conceitual que entrelaça pintura e cinema como formas de linguagem que se desdobram, se traduzem e se recriam mutuamente. A partir da intermidialidade, entendida não como simples sobreposição de mídias, mas como espaço fértil de convergência simbólica, o autor delineia um campo em que a imagem se torna ponte entre o visível e o invisível, entre o passado e o presente, entre o efêmero e o eterno.\n\nCada capítulo opera como uma moldura em expansão: reconfigura gêneros, desafia fronteiras disciplinares e mergulha na complexidade das formas visuais na hipermodernidade — tempo de velocidade, fragmentação e excesso de estímulos. Amparado por autores como Walter Benjamin, Georges Didi-Huberman e Gilles Lipovetsky, Acir Dias reflete sobre o lugar da arte em um mundo em constante deslocamento, no qual a memória e a sensibilidade se tornam territórios de resistência.\n\nDe Bruegel a Van Gogh, de Sokurov a Béla Tarr, do rosto em close-up à paisagem pictórica em movimento, o livro investiga como a imagem cinematográfica pode se tornar pintura e como a pintura pode se tornar tempo — narração, silêncio, alegoria, presença. Arte em Trânsito não é apenas um livro sobre arte. É uma convocação para sentir e pensar com as imagens.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, externo: true, botao: "Ler grátis na editora", link: "https://ponteseditores.com.br/loja3/loja/arte-em-transito-traducoes-intermidiaticas-no-cinema-e-na-pintura-acir-dias/", detalhes: "E-book de acesso gratuito · ISBN 978-85-217-0680-9" }
    },
    {
      id: "intermidialidade-interliteraturas-interartes",
      titulo: "InterMidialidade, InterLiteraturas, InterArtes",
      subtitulo: "Convergências e Rupturas na Hipermodernidade",
      genero: "Ensaios",
      colecao: "Não ficção · Ensaios · Literatura, artes e mídias",
      editora: "Pontes Editores",
      editoraLink: "https://ponteseditores.com.br/loja3/loja/intermidialidade-interliteraturas-interartes-convergencias-e-rupturas-na-hipermodernidade/",
      ano: 2024,
      paginas: 145,
      capa: "capas/intermidialidade-interliteraturas-interartes.jpg",
      cor: "#efece6",
      chamada: "Cada ruptura facilita novas convergências.",
      sinopse: "InterMidialidade, InterLiteraturas, InterArtes: convergências e rupturas na hipermodernidade propõe uma análise das interações multifacetadas entre literatura, artes e mídias na era digital. Em um contexto de rápida evolução tecnológica e globalização, o livro provoca reflexões sobre a influência dessas dinâmicas nas narrativas culturais contemporâneas, investigando as novas formas de expressão que emergem à medida que as fronteiras entre gêneros, mídias e culturas se tornam mais fluidas.\n\nA obra examina tanto os efeitos das transformações digitais quanto as tensões e os desafios que elas acarretam, incentivando o leitor a adotar uma postura crítica diante da maneira como a convergência midiática e a dispersão tecnológica redefinem criatividade, memória e identidade cultural.\n\nPara quem busca entender as dinâmicas da hipermodernidade, é um guia para navegar em um panorama cultural em contínua transformação, no qual cada ruptura facilita novas convergências e cada inovação contém o potencial para futuras mudanças.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, pedido: true, botao: "Faça seu pedido e receba o e-book", detalhes: "E-book gratuito · enviado para o seu e-mail" }
    },

    /* ---- Mercado de Letras ---- */
    {
      id: "cinema-e-hipermodernidade",
      titulo: "Cinema e Hipermodernidade",
      subtitulo: "",
      autores: "Acir Dias da Silva e Maria Aparecida Rodrigues",
      genero: "Ensaios",
      colecao: "Não ficção · Arte · Cinema",
      editora: "Mercado de Letras",
      editoraLink: "https://mercado-de-letras.com.br/produto/cinema-e-hipermodernidade/",
      ano: 2021,
      paginas: 196,
      capa: "capas/cinema-e-hipermodernidade.jpg",
      cor: "#222222",
      chamada: "As raízes estéticas, políticas e culturais do cinema no presente fluido.",
      sinopse: "No cinema hipermoderno, é comum encontrar narrativas fluidas e de fluxo ou, por outro lado, narrativas quebradas, construídas com uso e abuso da tecnologia. Tais narrativas são baseadas nas raízes cinematográficas da Nouvelle Vague francesa, que procuram explorar e estimular emoções, temas, situações e personagens em uma descontinuidade. Assim, vão muito além do retrato convencional do personagem e da lógica na estrutura, no tempo e no espaço narrativo. Há uma clara deslegitimação da metanarrativa: um esforço em pensar o presente fluido como um momento absolutamente inédito na História e na narração.\n\nEm Cinema e Hipermodernidade, você encontra as raízes estéticas, políticas e culturais da expansão do consumo e da comunicação de massa; o enfraquecimento das normas autoritárias e disciplinares; o surto de individualização; a consagração do hedonismo e do psicologismo; a perda da fé no futuro revolucionário; o descontentamento com as paixões políticas e a transformação do palco das sociedades abastadas.\n\nEscrito em parceria com Maria Aparecida Rodrigues, professora do Programa de Pós-Graduação em Letras da PUC Goiás, ensaísta e crítica de arte.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, pedido: true, botao: "Faça seu pedido e receba o e-book", detalhes: "E-book gratuito · enviado para o seu e-mail" }
    },
    {
      id: "intersecoes-e-intermidias",
      titulo: "Interseções e Intermídias",
      subtitulo: "Literatura, cinema e arte em confluência",
      autores: "Acir Dias da Silva (organizador)",
      genero: "Coletânea · Ensaios",
      editora: "Unioeste",
      ano: 2018,
      paginas: 420,
      capa: "capas/intersecoes-e-intermidias.jpg",
      cor: "#3c5a78",
      chamada: "Dezesseis \"cenas\" sobre os cruzamentos entre literatura, cinema, fotografia e arte.",
      sinopse: "Interseções e Intermídias nasce do trabalho conjunto de diversos pesquisadores que investigam a hibridização do olhar e suas interfaces com a arte, a literatura e a cultura contemporânea. A obra entende a cultura atual como feita de múltiplos formatos e linguagens em convergência, em que a obra de arte se mostra inacabada e pede ao espectador uma participação ativa.\n\nOrganizados em cinco \"entrecenas\", os dezesseis capítulos passam pela mitologia junguiana no cinema dos irmãos Coen, pelo Yume de Kurosawa, pelos longas de Lucrecia Martel, por transcriações fílmicas de Poe, Clarice Lispector e Kundera, pelo Shirin de Kiarostami, por Robinson Crusoé, Hiroshima meu amor e Pantera Negra, entre outros.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "pdf/intersecoes-e-intermidias.pdf", botao: "Baixar PDF grátis", detalhes: "PDF · 420 páginas · ISBN 978-85-68205-36-5" }
    },
    {
      id: "alegria-alegria",
      titulo: "Alegria, Alegria",
      subtitulo: "Literatura e cultura na contramão",
      autores: "Acir Dias da Silva e Marisa Corrêa Silva (organizadores)",
      genero: "Coletânea · Ensaios",
      editora: "Unioeste",
      ano: 2018,
      paginas: 295,
      capa: "capas/alegria-alegria.jpg",
      cor: "#b08a2e",
      chamada: "Humor, irreverência e ironia como formas de resistência crítica na literatura e nas artes.",
      sinopse: "Nascido de um simpósio no V CIELLI, na Universidade Estadual de Maringá, Alegria, Alegria toma emprestado o título da canção tropicalista de Caetano Veloso e propõe uma pausa na pressa de repetir as leituras consagradas. Inspirado em Žižek (\"e se o contrário for verdade?\") e na História da Alegria de Adam Potkay, o livro reúne pesquisas que questionam a crítica mainstream sem abrir mão do rigor científico.\n\nEm três \"sequências\", os ensaios tratam do cinema de Nanni Moretti, Bagdad Café e Lucrecia Martel; do humor e da ironia em Helder Macedo, Agualusa, Martins Pena e Jorge Amado; e do grotesco em Matéi Vișniec, de Cortázar, da fotografia e da autoficção de Ricardo Lísias.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "pdf/alegria-alegria.pdf", botao: "Baixar PDF grátis", detalhes: "PDF · 295 páginas · ISBN 978-85-68205-34-1" }
    },
    {
      id: "cinema-brasileiro-e-educacao",
      titulo: "Cinema Brasileiro e Educação",
      subtitulo: "",
      autores: "Acir Dias da Silva e Salete Paulina Machado Sirino (organizadores)",
      genero: "Coletânea · Educação",
      editora: "Unioeste",
      ano: 2018,
      paginas: 287,
      capa: "capas/cinema-brasileiro-e-educacao.jpg",
      cor: "#7a1a1a",
      chamada: "O cinema nacional na sala de aula, à luz da Lei 13.006/2014.",
      sinopse: "A Lei 13.006/2014 tornou obrigatória a exibição de filmes brasileiros nas escolas de Educação Básica, e com ela vieram perguntas: como escolher os filmes, como formar os professores em linguagem audiovisual, como não transformar a fruição em obrigação? Este livro, ligado ao Projeto de Extensão Cinema Brasileiro na Escola, reúne cineastas, produtores e pesquisadores para pensar essas questões.\n\nEm quatro seções, trata do chão da escola e da pedagogia da luz, da linguagem e da sintaxe cinematográfica, das relações entre literatura, jornalismo, teatro e cinema (incluindo Cinema, Aspirinas e Urubus) e faz uma retrospectiva do cinema brasileiro do século XX.",
      trecho: "Esta publicação está atravessada por variadas interpretações praticadas no mundo do Cinema Brasileiro e Educação, tornando visíveis a pressão e a tensão dos rastros e traços do tempo.",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "pdf/cinema-brasileiro-e-educacao.pdf", botao: "Baixar PDF grátis", detalhes: "PDF · 287 páginas · ISBN 978-85-68205-35-8" }
    },
    {
      id: "interpretacao-e-multiplos-olhares",
      titulo: "Interpretação e Múltiplos Olhares",
      subtitulo: "",
      autores: "Acir Dias da Silva, Lourdes Kaminski Alves, Éres Antônio de Oliveira e Maria de Fátima Gonçalves Lima (organizadores)",
      genero: "Coletânea · Ensaios",
      colecao: "Coleção Confluências da Literatura e Outras Áreas",
      editora: "Editora da PUC Goiás",
      ano: 2012,
      capa: "capas/interpretacao-e-multiplos-olhares.jpg",
      cor: "#6b1a1f",
      chamada: "Leituras que cruzam a literatura com outras áreas do conhecimento.",
      sinopse: "Publicado pela Editora da PUC Goiás na coleção Confluências da Literatura e Outras Áreas, Interpretação e Múltiplos Olhares reúne ensaios que leem o texto literário em diálogo com outros campos do saber e outras linguagens.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "pdf/interpretacao-e-multiplos-olhares.pdf", botao: "Baixar PDF grátis", detalhes: "PDF" }
    },
    {
      id: "percursos-arte-e-identidade",
      titulo: "Percursos Artísticos: Arte e Identidade",
      subtitulo: "Caderno de Atividades · Educação Infantil e Séries Iniciais",
      autores: "Acir Dias da Silva",
      genero: "Caderno de Atividades",
      colecao: "Série Percursos Artísticos",
      editora: "Unioeste",
      capa: "capas/percursos-arte-e-identidade.jpg",
      cor: "#a8322d",
      chamada: "Caderno de atividades de arte e identidade para a Educação Infantil e as Séries Iniciais.",
      sinopse: "Parte da série Percursos Artísticos, este caderno é voltado a professores e crianças da Educação Infantil e das Séries Iniciais, com atividades que ligam a arte à história, à família e à cultura de cada criança, ajudando-a a se reconhecer e a reconhecer o outro.\n\nA série reúne seis cadernos: Arte e Identidade, Artes Visuais, Arte e Tecnologia, Dança, Música e Teatro. Todos podem ser baixados gratuitamente.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "https://drive.google.com/file/d/1K2LrnH0Pin8QHXHEjJ4Xw0-MY2O4Jh4O/view", botao: "Baixar PDF grátis", detalhes: "PDF · download pelo Google Drive" }
    },
    {
      id: "percursos-artes-visuais",
      titulo: "Percursos Artísticos: Artes Visuais",
      subtitulo: "Caderno de Atividades · Educação Infantil e Séries Iniciais",
      autores: "Acir Dias da Silva",
      genero: "Caderno de Atividades",
      colecao: "Série Percursos Artísticos",
      editora: "Unioeste",
      capa: "capas/percursos-artes-visuais.jpg",
      cor: "#7aa36b",
      chamada: "Caderno de atividades de artes visuais para a Educação Infantil e as Séries Iniciais.",
      sinopse: "Parte da série Percursos Artísticos, este caderno é voltado a professores e crianças da Educação Infantil e das Séries Iniciais, com atividades de desenho, pintura, cor e composição para desenvolver o olhar e a expressão visual.\n\nA série reúne seis cadernos: Arte e Identidade, Artes Visuais, Arte e Tecnologia, Dança, Música e Teatro. Todos podem ser baixados gratuitamente.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "https://drive.google.com/file/d/1t5gQS6E638kdsPk5trW22fCwsGpKtGI2/view", botao: "Baixar PDF grátis", detalhes: "PDF · download pelo Google Drive" }
    },
    {
      id: "percursos-arte-e-tecnologia",
      titulo: "Percursos Artísticos: Arte e Tecnologia",
      subtitulo: "Caderno de Atividades · Educação Infantil e Séries Iniciais",
      autores: "Acir Dias da Silva",
      genero: "Caderno de Atividades",
      colecao: "Série Percursos Artísticos",
      editora: "Unioeste",
      capa: "capas/percursos-arte-e-tecnologia.jpg",
      cor: "#1f3a52",
      chamada: "Caderno de atividades de arte e tecnologia para a Educação Infantil e as Séries Iniciais.",
      sinopse: "Parte da série Percursos Artísticos, este caderno é voltado a professores e crianças da Educação Infantil e das Séries Iniciais, com atividades que aproximam a criação artística dos recursos e linguagens tecnológicas.\n\nA série reúne seis cadernos: Arte e Identidade, Artes Visuais, Arte e Tecnologia, Dança, Música e Teatro. Todos podem ser baixados gratuitamente.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "https://drive.google.com/file/d/10zPMkrfEoVbIp1qcBUFwWqXmr58xt2e0/view", botao: "Baixar PDF grátis", detalhes: "PDF · download pelo Google Drive" }
    },
    {
      id: "percursos-danca",
      titulo: "Percursos Artísticos: Dança",
      subtitulo: "Caderno de Atividades · Educação Infantil e Séries Iniciais",
      autores: "Acir Dias da Silva",
      genero: "Caderno de Atividades",
      colecao: "Série Percursos Artísticos",
      editora: "Unioeste",
      capa: "capas/percursos-danca.jpg",
      cor: "#c0563a",
      chamada: "Caderno de atividades de dança para a Educação Infantil e as Séries Iniciais.",
      sinopse: "Parte da série Percursos Artísticos, este caderno é voltado a professores e crianças da Educação Infantil e das Séries Iniciais, com atividades de movimento, ritmo e expressão corporal.\n\nA série reúne seis cadernos: Arte e Identidade, Artes Visuais, Arte e Tecnologia, Dança, Música e Teatro. Todos podem ser baixados gratuitamente.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "https://drive.google.com/file/d/1ZjwjGZT2tGHWSupZG9I9BfMQrtgHrceX/view", botao: "Baixar PDF grátis", detalhes: "PDF · download pelo Google Drive" }
    },
    {
      id: "percursos-musica",
      titulo: "Percursos Artísticos: Música",
      subtitulo: "Caderno de Atividades · Educação Infantil e Séries Iniciais",
      autores: "Acir Dias da Silva",
      genero: "Caderno de Atividades",
      colecao: "Série Percursos Artísticos",
      editora: "Unioeste",
      capa: "capas/percursos-musica.jpg",
      cor: "#1d3a6b",
      chamada: "Caderno de atividades de música para a Educação Infantil e as Séries Iniciais.",
      sinopse: "Parte da série Percursos Artísticos, este caderno é voltado a professores e crianças da Educação Infantil e das Séries Iniciais, com atividades de escuta, ritmo, som e criação musical.\n\nA série reúne seis cadernos: Arte e Identidade, Artes Visuais, Arte e Tecnologia, Dança, Música e Teatro. Todos podem ser baixados gratuitamente.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "https://drive.google.com/file/d/1yl0WbMXZxHPvUIHGtddHqVBH9_efVjNy/view", botao: "Baixar PDF grátis", detalhes: "PDF · download pelo Google Drive" }
    },
    {
      id: "percursos-teatro",
      titulo: "Percursos Artísticos: Teatro",
      subtitulo: "Caderno de Atividades · Educação Infantil e Séries Iniciais",
      autores: "Acir Dias da Silva",
      genero: "Caderno de Atividades",
      colecao: "Série Percursos Artísticos",
      editora: "Unioeste",
      capa: "capas/percursos-teatro.jpg",
      cor: "#7a1f2b",
      chamada: "Caderno de atividades de teatro para a Educação Infantil e as Séries Iniciais.",
      sinopse: "Parte da série Percursos Artísticos, este caderno é voltado a professores e crianças da Educação Infantil e das Séries Iniciais, com atividades de jogo dramático, improvisação e encenação.\n\nA série reúne seis cadernos: Arte e Identidade, Artes Visuais, Arte e Tecnologia, Dança, Música e Teatro. Todos podem ser baixados gratuitamente.",
      trecho: "",
      fisico: null,
      digital: { preco: 0, gratis: true, link: "https://drive.google.com/file/d/196-zRPTd-oC2EX_rdKCdAZDTg0JYiJsM/view", botao: "Baixar PDF grátis", detalhes: "PDF · download pelo Google Drive" }
    }
  ]
};
