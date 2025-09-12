// Atividade 1: Eventos Básicos de Clique (Código anterior)
// ... (mantenha o código da Atividade 1 aqui)
// Selecionamos os botões da atividade 1 para que o código continue funcionando
const addToCartBtn = document.getElementById('addToCartBtn');
const confirmationMsg = document.getElementById('confirmation-msg');
const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
const detailsText = document.getElementById('details-text');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const quantityValue = document.getElementById('quantityValue');
const clearCartBtn = document.getElementById('clearCartBtn');

addToCartBtn.addEventListener('click', () => {
    confirmationMsg.classList.remove('hidden');
    setTimeout(() => {
        confirmationMsg.classList.add('hidden');
    }, 3000);
});

toggleDetailsBtn.addEventListener('click', () => {
    detailsText.classList.toggle('hidden');
    if (detailsText.classList.contains('hidden')) {
        toggleDetailsBtn.textContent = 'Ver Detalhes';
    } else {
        toggleDetailsBtn.textContent = 'Ocultar Detalhes';
    }
});

increaseBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityValue.textContent);
    quantityValue.textContent = currentQuantity + 1;
});

decreaseBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityValue.textContent);
    if (currentQuantity > 1) {
        quantityValue.textContent = currentQuantity - 1;
    }
});

clearCartBtn.addEventListener('click', () => {
    if (window.confirm('Tem certeza que deseja limpar o carrinho?')) {
        alert('Carrinho limpo com sucesso!');
    } else {
        alert('Ação cancelada.');
    }
});


// Atividade 2: Eventos de Mouse e Interação Visual

// Selecionamos o cartão de produto e a caixa de informações adicionais
const productCard = document.getElementById('productCard');
const moreInfoBox = document.getElementById('more-info');

// 1. Efeito de destaque e exibição de informações com 'mouseover'
// Adicionamos um ouvinte de evento para quando o mouse entra no elemento.
productCard.addEventListener('mouseover', () => {
    // Adiciona a classe 'highlight' para criar o efeito visual.
    productCard.classList.add('highlight');
    
    // Remove a classe 'hidden' para mostrar a caixa de informações.
    moreInfoBox.classList.remove('hidden');
    
    console.log('Evento: mouseover - O mouse entrou no cartão de produto.');
});

// 2. Remoção do efeito de destaque e ocultação de informações com 'mouseout'
// Adicionamos um ouvinte de evento para quando o mouse sai do elemento.
productCard.addEventListener('mouseout', () => {
    // Remove a classe 'highlight' para reverter o efeito visual.
    productCard.classList.remove('highlight');
    
    // Adiciona a classe 'hidden' para esconder a caixa de informações.
    moreInfoBox.classList.add('hidden');
    
    console.log('Evento: mouseout - O mouse saiu do cartão de produto.');
});