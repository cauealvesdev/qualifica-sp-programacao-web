Meu Primeiro Site Responsivo
Este projeto foi desenvolvido para atender aos objetivos de aprendizado sobre design responsivo, utilizando HTML e CSS. A página foi criada com a abordagem mobile-first, garantindo que o layout e a usabilidade sejam otimizados para dispositivos móveis antes de serem adaptados para telas maiores.

Funcionalidades do Projeto
HTML Semântico: A estrutura da página é organizada de forma clara e acessível, usando tags como <header>, <main>, <section>, <footer> e <table>.

Design Mobile-First: O estilo base (styles.css) é otimizado para a versão mobile. O layout é expandido para tablets e desktops por meio de media queries.

Media Queries e Breakpoints: Foram usados os seguintes breakpoints para adaptar o layout:

Mobile: até 767px (layout padrão)

Tablet: a partir de 768px (cards e tabela se reorganizam)

Desktop: a partir de 1024px (layout final com 3 cards por linha)

Componentes Responsivos:

Menu Hamburguer: Ícone que se expande em telas pequenas e se transforma em um menu horizontal em telas maiores.

Cards Flexíveis: Os cards de serviço se ajustam automaticamente para exibir um, dois ou três itens por linha, dependendo do tamanho da tela.

Tabela Adaptável: A tabela se transforma em uma lista em telas pequenas, facilitando a leitura em dispositivos móveis.

Imagens Otimizadas: Utiliza a tag <picture> para servir imagens de tamanhos diferentes (mobile.jpg, tablet.jpg, desktop.jpg) conforme o dispositivo, otimizando o carregamento da página.

Estrutura de Arquivos
/
├── index.html          # Estrutura principal da página
├── styles.css          # Folha de estilos com media queries
└── images/             # Pasta com as imagens otimizadas
    ├── mobile.jpg
    ├── tablet.jpg
    └── desktop.jpg
Como Executar o Projeto
Clone ou baixe o repositório para o seu computador.

Abra o arquivo index.html em qualquer navegador web.

Para testar a responsividade, use a ferramenta de DevTools (F12 no Chrome/Firefox) do navegador e altere a largura da janela.