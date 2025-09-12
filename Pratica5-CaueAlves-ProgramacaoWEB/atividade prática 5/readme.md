# Atividade Prática: Seletores CSS

Este projeto foi desenvolvido como uma atividade prática para explorar e aplicar os diferentes tipos de seletores CSS.

## 🎯 Objetivos de Aprendizagem

- Compreender e aplicar seletores de elemento, classe e ID.
- Utilizar seletores descendentes e combinadores.
- Implementar pseudo-classes e pseudo-elementos para efeitos interativos.
- Organizar o CSS de forma hierárquica e eficiente.

## 🛠 Escolhas de Seletores e Implementação

Para esta atividade, utilizei uma variedade de seletores para estilizar a página da padaria de forma específica e organizada.

### Seletores Básicos

- **Seletores de Elemento (`body`, `h1`, `p`)**: Foram usados para aplicar estilos globais, como a fonte, cor de fundo e a cor dos títulos, que afetam todos os elementos com essas tags.
- **Seletor de ID (`#cabecalho-principal`)**: Foi utilizado para estilizar de forma única o cabeçalho da página, garantindo que nenhum outro elemento compartilhe esses mesmos estilos.
- **Seletores de Classe (`.produto-destaque`, `.btn-comprar`)**: Permitem a reutilização de estilos. Por exemplo, a classe `.produto-destaque` foi aplicada a produtos específicos para destacá-los, e as classes de botão foram usadas em diferentes botões para manter a consistência visual.

### Seletores Avançados

- **Seletor Descendente (`.produto-item p`)**: Estilizei os parágrafos dentro de cada produto para que tivessem uma cor e estilo de fonte diferentes, sem afetar outros parágrafos na página.
- **Seletor de Filho Direto (`footer > p`)**: Garanti que a margem fosse aplicada apenas aos parágrafos que são filhos diretos do rodapé, evitando qualquer estilo indesejado em outros lugares.
- **Pseudo-classes (`:hover`, `:first-child`, `:nth-child()`)**:
    - O seletor `:hover` foi essencial para criar a interatividade nos botões, fazendo-os mudar de cor e "zoom" ao passar o mouse.
    - O seletor `:first-child` foi usado para destacar o primeiro produto de cada seção com uma borda superior.
    - O seletor `:nth-child(odd)` foi aplicado para criar um padrão de cores alternadas nos produtos, melhorando a legibilidade e o design.

## 📸 Screenshots

- **[screenshot-normal.png]**: Captura de tela da página com o estado normal.
- **[screenshot-hover.png]**: Captura de tela da página mostrando o efeito de hover nos botões.

---

Espero que esta organização ajude na avaliação da atividade!