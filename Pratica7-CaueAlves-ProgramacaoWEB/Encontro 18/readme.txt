README.md
Padaria Delícias - Layouts com Grid e Flexbox
Este projeto foi desenvolvido como uma atividade prática para demonstrar a aplicação de CSS Grid e Flexbox na criação de layouts modernos e responsivos para a web.

🎯 Objetivos do Projeto
Compreender as Diferenças: Aplicar Flexbox (unidimensional) para alinhamento de itens e Grid (bidimensional) para layouts de grade complexos.

Combinação de Tecnologias: Utilizar Grid para a estrutura geral da página e Flexbox para componentes internos, como a navegação e os cards.

Desenvolvimento Responsivo: Garantir que o layout se adapte a diferentes tamanhos de tela (desktop, tablet, mobile) usando media queries.

🛠️ Tecnologias Utilizadas
HTML5: Para a estrutura semântica da página.

CSS3: Para a estilização e a criação dos layouts com Grid e Flexbox.

📂 Estrutura de Arquivos
A pasta do projeto está organizada da seguinte forma:

.
├── index.html
├── styles.css
├── README.md
├── images/
│   ├── hero-image.jpg
│   ├── produto1.jpg
│   ├── produto2.jpg
│   ├── produto3.jpg
│   ├── produto4.jpg
│   └── produto5.jpg
└── screenshots/
    ├── desktop.png
    └── mobile.png
📝 Escolhas de Layout
Grid
O CSS Grid foi utilizado para as seguintes seções, pois elas exigem um controle preciso em duas dimensões (linhas e colunas):

Seção Hero (.hero-section): O layout assimétrico de duas colunas foi criado com grid-template-columns e grid-template-areas, permitindo uma organização visualmente interessante do texto e da imagem.

Galeria de Produtos (.galeria-produtos): A galeria foi implementada com grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)), o que a torna responsiva automaticamente, ajustando o número de colunas com base no espaço disponível.

Flexbox
O Flexbox foi a escolha ideal para componentes internos e alinhamentos em uma única direção:

Navegação (.nav): Usado para alinhar os links horizontalmente com justify-content: space-between.

Cards de Produtos (.produto-card): Usado para alinhar o conteúdo interno (imagem, texto, botão) verticalmente com flex-direction: column.

Seção de Depoimentos (.depoimentos-container): O flex-wrap permite que os cards de depoimentos se ajustem e quebrem a linha, enquanto justify-content: center os mantém alinhados.

Rodapé (.footer): As colunas do rodapé são facilmente organizadas com Flexbox, se ajustando de forma flexível em telas menores.