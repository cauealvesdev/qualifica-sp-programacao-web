// ... (mantenha os códigos das Atividades 1, 2 e 3 aqui) ...

// Atividade 4: Eventos de Teclado e Interação Avançada

// Seleção dos novos elementos
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');
const commentField = document.getElementById('commentField');
const charCounter = document.getElementById('charCounter');
const allAddToCartButtons = document.querySelectorAll('.action-btn');

// Variáveis para a navegação por teclado
let currentProductIndex = 0;
productCards[currentProductIndex].classList.add('active'); // Destaca o primeiro produto

// 1. Campo de busca com evento 'keyup'
// O evento 'keyup' é perfeito para reagir a cada caractere digitado.
searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase(); // Converte o termo para minúsculas
    
    // Itera sobre todos os cartões de produto
    productCards.forEach(card => {
        // Obtém o nome do produto a partir do atributo 'data'
        const productName = card.getAttribute('data-product-name').toLowerCase();
        
        // Verifica se o nome do produto inclui o termo de busca
        if (productName.includes(searchTerm)) {
            card.style.display = 'block'; // Mostra o produto se ele corresponder
        } else {
            card.style.display = 'none'; // Esconde o produto se não corresponder
        }
    });
});


// 2. Contador de caracteres com evento 'keyup'
commentField.addEventListener('keyup', () => {
    const currentLength = commentField.value.length;
    const maxLength = commentField.maxLength;
    charCounter.textContent = `${currentLength}/${maxLength} caracteres`;
});


// 3. Atalho de teclado para 'Adicionar ao Carrinho' com evento 'keydown'
// 'keydown' é usado para capturar a tecla logo que ela é pressionada.
document.addEventListener('keydown', (event) => {
    // Verifica se a tecla 'Enter' foi pressionada e se a tecla 'Control' (ou 'Command' no Mac) também está pressionada.
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        // Encontra o botão de "Adicionar ao Carrinho" do produto ativo.
        const activeProduct = document.querySelector('.product-card.active');
        const addToCartBtn = activeProduct.querySelector('.action-btn');
        
        // Simula um clique no botão
        addToCartBtn.click();
        
        // Previne o comportamento padrão do navegador, como quebra de linha em formulários.
        event.preventDefault();
        console.log('Atalho Ctrl + Enter ativado!');
    }
});


// 4. Navegação por produtos com teclas de seta
document.addEventListener('keydown', (event) => {
    // Remove o destaque do produto atual
    productCards[currentProductIndex].classList.remove('active');
    
    // Verifica a tecla pressionada e atualiza o índice
    if (event.key === 'ArrowRight') {
        currentProductIndex = (currentProductIndex + 1) % productCards.length;
        console.log('Navegou para a direita.');
    } else if (event.key === 'ArrowLeft') {
        // Usa uma lógica para garantir que o índice não seja negativo
        currentProductIndex = (currentProductIndex - 1 + productCards.length) % productCards.length;
        console.log('Navegou para a esquerda.');
    }
    
    // Adiciona o destaque ao novo produto
    productCards[currentProductIndex].classList.add('active');
});