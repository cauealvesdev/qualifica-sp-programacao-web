// Atividade 1: Funções Básicas para Cálculos

// 👋 Função 1: Mensagem de boas-vindas
function boasVindas() {
    // Acessa o elemento HTML com o ID "mensagemBoasVindas" e muda seu conteúdo.
    document.getElementById("mensagemBoasVindas").textContent = "Olá! Bem-vindo(a) ao nosso sistema de pedidos online.";
}
boasVindas(); // Chama a função assim que a página carrega para exibir a mensagem.

// 🛒 Função 2: Calcular subtotal
function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}

// 🎁 Função 3: Calcular desconto
function calcularDesconto(valor, percentualDesconto) {
    const valorDesconto = valor * (percentualDesconto / 100);
    return valor - valorDesconto;
}

// 🚚 Função 4: Calcular taxa de entrega
function calcularTaxaEntrega(distanciaKm) {
    const taxaBase = 5;
    const taxaPorKm = 1.5;
    return taxaBase + (distanciaKm * taxaPorKm);
}

// --- Funções para interagir com o HTML ---

/**
 * Captura os valores de preço e quantidade, calcula o subtotal e exibe na tela.
 */
function exibirSubtotal() {
    // 1. Capturar os valores dos inputs usando o ID.
    // O .value pega o que foi digitado, e o parseFloat() converte para número.
    const preco = parseFloat(document.getElementById("precoItem").value);
    const quantidade = parseInt(document.getElementById("quantidadeItem").value);
    
    // 2. Chamar a função de cálculo.
    const subtotal = calcularSubtotal(preco, quantidade);
    
    // 3. Exibir o resultado no elemento com o ID "resultadoSubtotal".
    // toFixed(2) formata o número para ter 2 casas decimais.
    document.getElementById("resultadoSubtotal").textContent = `Subtotal: R$ ${subtotal.toFixed(2)}`;
}

/**
 * Captura o valor e o percentual, calcula o valor com desconto e exibe na tela.
 */
function exibirDesconto() {
    const valor = parseFloat(document.getElementById("valorTotal").value);
    const percentual = parseFloat(document.getElementById("percentualDesconto").value);
    
    const valorComDesconto = calcularDesconto(valor, percentual);
    
    document.getElementById("resultadoDesconto").textContent = `Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`;
}

/**
 * Captura a distância, calcula a taxa de entrega e exibe na tela.
 */
function exibirTaxaEntrega() {
    const distancia = parseFloat(document.getElementById("distanciaEntrega").value);
    
    const taxa = calcularTaxaEntrega(distancia);
    
    document.getElementById("resultadoEntrega").textContent = `Taxa de Entrega: R$ ${taxa.toFixed(2)}`;
}