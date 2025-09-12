// Funções de Cálculo - Reutilizando e refinando

// 👋 Função 1: Exibir mensagem de boas-vindas
function boasVindas() {
    const nomeUsuario = "Cliente"; // Pode ser ajustado para um nome dinâmico no futuro
    document.getElementById("boasVindas").textContent = `Olá, ${nomeUsuario}! Faça seu pedido abaixo.`;
}

// 🛒 Função 2: Calcular subtotal
function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}

// 💰 Função 3: Calcular imposto (8% sobre o subtotal)
function calcularImposto(subtotal) {
    const percentualImposto = 0.08;
    return subtotal * percentualImposto;
}

// 🚚 Função 4: Calcular taxa de entrega
function calcularTaxaEntrega(distanciaKm) {
    const taxaBase = 5.00;
    const taxaPorKm = 1.50;
    return taxaBase + (distanciaKm * taxaPorKm);
}

// 🆓 Função 5: Verificar frete grátis (pedidos acima de R$ 50)
function verificarFreteGratis(subtotal) {
    const valorMinimo = 50.00;
    return subtotal >= valorMinimo;
}

// 🧾 Função 6: Calcular valor final do pedido
function calcularValorFinal(subtotal, imposto, taxaEntrega) {
    return subtotal + imposto + taxaEntrega;
}

// --- Função Principal que Orquestra tudo ---

/**
 * Coleta os dados do HTML, processa o pedido e exibe os resultados na tela.
 */
function processarPedido() {
    // 1. Coletar os valores dos campos de entrada
    const preco = parseFloat(document.getElementById("precoItem").value) || 0;
    const quantidade = parseInt(document.getElementById("quantidadeItem").value) || 0;
    const distancia = parseFloat(document.getElementById("distanciaEntrega").value) || 0;

    // 2. Chamar as funções de cálculo para obter os valores
    const subtotal = calcularSubtotal(preco, quantidade);
    const imposto = calcularImposto(subtotal);
    const freteGratis = verificarFreteGratis(subtotal);

    let taxaEntrega = 0;
    if (!freteGratis) {
        taxaEntrega = calcularTaxaEntrega(distancia);
    }
    
    const valorFinal = calcularValorFinal(subtotal, imposto, taxaEntrega);

    // 3. Exibir os resultados na área de resumo
    document.getElementById("resultadoSubtotal").textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById("resultadoImposto").textContent = `R$ ${imposto.toFixed(2)}`;
    document.getElementById("resultadoEntrega").textContent = `R$ ${taxaEntrega.toFixed(2)}`;
    document.getElementById("resultadoFinal").textContent = `R$ ${valorFinal.toFixed(2)}`;
    
    // 4. Exibir mensagem de frete grátis e aplicar estilo
    const freteGratisElement = document.getElementById("freteGratis");
    if (freteGratis) {
        freteGratisElement.textContent = "Frete Grátis: 🎉 Você ganhou!";
        freteGratisElement.classList.add("destaque");
    } else {
        freteGratisElement.textContent = "";
        freteGratisElement.classList.remove("destaque");
    }
}

// Executar a função de boas-vindas quando a página é carregada
window.onload = boasVindas;