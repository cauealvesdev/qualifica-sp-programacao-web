// Atividade 1: Eventos Básicos de Clique

// 1. Botão "Adicionar ao Carrinho"
// Selecionamos o botão e a mensagem de confirmação pelo ID.
const addToCartBtn = document.getElementById('addToCartBtn');
const confirmationMsg = document.getElementById('confirmation-msg');

// Usamos addEventListener() para 'ouvir' o evento 'click'.
addToCartBtn.addEventListener('click', () => {
    // Quando o botão é clicado, removemos a classe 'hidden' para mostrar a mensagem.
    confirmationMsg.classList.remove('hidden');

    // setTimeout() é usado para esconder a mensagem depois de 3 segundos (3000 milissegundos).
    setTimeout(() => {
        confirmationMsg.classList.add('hidden');
    }, 3000);
});


// 2. Botão "Ver Detalhes"
// Selecionamos o botão e o texto de detalhes do produto.
const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
const detailsText = document.getElementById('details-text');

// Adicionamos o evento 'click' ao botão.
toggleDetailsBtn.addEventListener('click', () => {
    // classList.toggle() é um método prático que adiciona a classe se ela não existe
    // e a remove se ela já existe.
    detailsText.classList.toggle('hidden');

    // Podemos também mudar o texto do botão para indicar o que ele faz.
    if (detailsText.classList.contains('hidden')) {
        toggleDetailsBtn.textContent = 'Ver Detalhes';
    } else {
        toggleDetailsBtn.textContent = 'Ocultar Detalhes';
    }
});


// 3. Contador de Quantidade
// Selecionamos os botões de controle e o elemento que exibe a quantidade.
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const quantityValue = document.getElementById('quantityValue');

// Evento 'click' para o botão de aumentar (+).
increaseBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityValue.textContent); // Obtém a quantidade atual como número.
    quantityValue.textContent = currentQuantity + 1; // Incrementa e atualiza o texto.
});

// Evento 'click' para o botão de diminuir (-).
decreaseBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityValue.textContent);
    // Verificamos se a quantidade é maior que 1 antes de diminuir, para evitar valores negativos ou zero.
    if (currentQuantity > 1) {
        quantityValue.textContent = currentQuantity - 1;
    }
});


// 4. Botão "Limpar Carrinho"
// Selecionamos o botão.
const clearCartBtn = document.getElementById('clearCartBtn');

// Adicionamos o evento 'click'.
clearCartBtn.addEventListener('click', () => {
    // window.confirm() exibe uma caixa de diálogo com uma mensagem e botões 'OK' e 'Cancelar'.
    // Ele retorna 'true' se o usuário clicar em 'OK' e 'false' se clicar em 'Cancelar'.
    if (window.confirm('Tem certeza que deseja limpar o carrinho?')) {
        // Se a confirmação for positiva, exibimos um alerta.
        // Em um projeto real, aqui você implementaria a lógica para esvaziar o carrinho.
        alert('Carrinho limpo com sucesso!');
    } else {
        alert('Ação cancelada.');
    }
});