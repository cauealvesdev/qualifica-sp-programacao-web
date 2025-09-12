// Projeto Final: Loja Virtual Interativa

// Evento de Carregamento da Página
// O evento 'load' é disparado quando a página inteira (incluindo imagens e arquivos)
// foi completamente carregada.
window.addEventListener('load', () => {
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.classList.add('hidden'); // Esconde a mensagem de carregamento
    console.log('Evento: load - A página foi completamente carregada.');
});

// Seleção dos elementos para todas as atividades
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const toggleDetailsButtons = document.querySelectorAll('.toggle-details-btn');
const increaseBtns = document.querySelectorAll('.increase-btn');
const decreaseBtns = document.querySelectorAll('.decrease-btn');
const commentField = document.getElementById('commentField');
const charCounter = document.getElementById('charCounter');
const checkoutForm = document.getElementById('checkoutForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailErrorMsg = document.getElementById('emailError');
const passwordStrengthBar = document.getElementById('passwordStrengthBar');
const passwordStrengthText = document.getElementById('passwordStrengthText');
const formSuccessMsg = document.getElementById('formSuccess');

// Variáveis de estado para validação e navegação
let isEmailValid = false;
let isPasswordStrong = false;
let currentProductIndex = 0;

// Adiciona a classe 'active' ao primeiro produto para começar a navegação
productCards[currentProductIndex].classList.add('active');

// Funções para lidar com os eventos
function handleAddToCart(event) {
    const parentCard = event.target.closest('.product-card');
    const confirmationMsg = parentCard.querySelector('.confirmation-msg');
    
    confirmationMsg.classList.remove('hidden');
    setTimeout(() => {
        confirmationMsg.classList.add('hidden');
    }, 3000);
}

function handleToggleDetails(event) {
    const parentCard = event.target.closest('.product-card');
    const detailsText = parentCard.querySelector('.description');
    detailsText.classList.toggle('hidden');
    event.target.textContent = detailsText.classList.contains('hidden') ? 'Ver Detalhes' : 'Ocultar Detalhes';
}

// 1. Eventos da Atividade 1 e 2: Clique e Mouseover
productCards.forEach(card => {
    // Mouseover / Mouseout para destaque
    card.addEventListener('mouseover', () => {
        card.classList.add('highlight');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('highlight');
    });

    // Botões de Aumentar / Diminuir
    const increaseBtn = card.querySelector('.increase-btn');
    const decreaseBtn = card.querySelector('.decrease-btn');
    const quantityValue = card.querySelector('.quantity-value');

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
});

// Botões de Adicionar e Detalhes (usando forEach para múltiplos elementos)
addToCartButtons.forEach(btn => btn.addEventListener('click', handleAddToCart));
toggleDetailsButtons.forEach(btn => btn.addEventListener('click', handleToggleDetails));


// 2. Eventos da Atividade 3: Formulário
checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (isEmailValid && isPasswordStrong) {
        formSuccessMsg.classList.remove('hidden');
        checkoutForm.reset();
        updatePasswordStrength(0);
        setTimeout(() => formSuccessMsg.classList.add('hidden'), 5000);
        console.log('Formulário enviado com sucesso!');
    } else {
        if (!isEmailValid) emailErrorMsg.classList.remove('hidden');
        alert('Por favor, corrija os campos destacados.');
    }
});

emailInput.addEventListener('keyup', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
        emailErrorMsg.classList.add('hidden');
        isEmailValid = true;
    } else {
        emailErrorMsg.classList.remove('hidden');
        isEmailValid = false;
    }
});

passwordInput.addEventListener('keyup', () => {
    const password = passwordInput.value;
    let score = 0;
    if (password.length >= 8) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-zA-Z0-9]/)) score++;
    updatePasswordStrength(score);
});

function updatePasswordStrength(score) {
    let strength = '';
    let barWidth = 0;
    let barColorClass = '';
    
    if (score < 3) {
        strength = 'Fraca'; barColorClass = 'strength-weak';
    } else if (score < 5) {
        strength = 'Média'; barColorClass = 'strength-medium';
    } else {
        strength = 'Forte'; barColorClass = 'strength-strong';
    }
    
    barWidth = (score / 5) * 100;
    isPasswordStrong = score >= 3;

    passwordStrengthBar.className = 'password-strength-bar ' + barColorClass;
    passwordStrengthBar.style.width = barWidth + '%';
    passwordStrengthText.textContent = `Força: ${strength}`;
}

// 3. Eventos da Atividade 4: Teclado
searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    productCards.forEach(card => {
        const productName = card.getAttribute('data-product-name').toLowerCase();
        card.style.display = productName.includes(searchTerm) ? 'block' : 'none';
    });
});

commentField.addEventListener('keyup', () => {
    const currentLength = commentField.value.length;
    const maxLength = commentField.maxLength;
    charCounter.textContent = `${currentLength}/${maxLength} caracteres`;
});

document.addEventListener('keydown', (event) => {
    // Atalho de teclado para adicionar ao carrinho
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        const activeProduct = document.querySelector('.product-card.active');
        const addToCartBtn = activeProduct.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.click();
            event.preventDefault();
        }
    }

    // Navegação com setas
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        productCards[currentProductIndex].classList.remove('active');
        if (event.key === 'ArrowRight') {
            currentProductIndex = (currentProductIndex + 1) % productCards.length;
        } else if (event.key === 'ArrowLeft') {
            currentProductIndex = (currentProductIndex - 1 + productCards.length) % productCards.length;
        }
        productCards[currentProductIndex].classList.add('active');
    }
});