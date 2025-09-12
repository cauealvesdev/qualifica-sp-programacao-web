Sobre o Projeto
Este projeto é uma atividade prática para demonstrar o conhecimento em estruturas HTML e técnicas de posicionamento CSS. A página simula um site simples de uma padaria, com elementos como cabeçalho fixo, botões flutuantes e cards de produtos com sobreposições.

Tecnologias Utilizadas
HTML5: Utilizado para estruturar o conteúdo e a semântica da página.

CSS3: Responsável por todo o estilo e, principalmente, pelo posicionamento dos elementos.

Estrutura de Pastas
O projeto é organizado da seguinte forma:

/
├── index.html
├── styles.css
├── images/
│   ├── placeholder-images/
│   └── (outras imagens do projeto)
└── README.txt
Funcionalidades e Técnicas de Posicionamento
O projeto foi construído seguindo as tarefas da atividade e aplicando as seguintes técnicas de CSS:

1. Estrutura Base e HTML Semântico
Utilização de tags semânticas como <header>, <main>, <section> e <footer> para uma estrutura clara e acessível.

2. Posicionamento Básico (position: relative e absolute)
O card de produto possui position: relative para servir como referência.

O selo de "Novo" ou "Promoção" (<span class="badge">) foi posicionado com position: absolute dentro do card, permitindo que ele se sobreponha à imagem de forma precisa.

A sobreposição de texto no banner principal (hero-overlay) também utiliza position: absolute para centralizar o texto sobre a imagem de fundo.

3. Elementos Fixos e Flutuantes (position: fixed)
O cabeçalho (<header>) usa position: fixed para permanecer visível no topo da página durante a rolagem.

O botão do WhatsApp flutua no canto inferior direito da tela, também com position: fixed, garantindo que esteja sempre acessível.

4. Camadas (z-index)
O z-index foi aplicado a elementos como o cabeçalho fixo e o botão do WhatsApp para garantir que eles fiquem acima do restante do conteúdo da página, evitando sobreposições indesejadas.

Como Visualizar o Projeto
Para visualizar a página, basta abrir o arquivo index.html em qualquer navegador web.