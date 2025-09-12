// Atividade 1: Funções Básicas para Cálculos

// 👋 Função 1: Mensagem de boas-vindas
function boasVindas() {
    document.getElementById("mensagemBoasVindas").textContent = "Olá! Bem-vindo(a) ao nosso sistema de pedidos online.";
}
boasVindas();

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

// --- Novas Funções para a Atividade ---

// 💰 Função 5: Calcular imposto (8% sobre o subtotal)
/**
 * Calcula o valor do imposto sobre o subtotal.
 * @param {number} subtotal - O subtotal do pedido.
 * @returns {number} O valor do imposto.
 */
function calcularImposto(subtotal) {
    const percentualImposto = 0.08; // 8%
    return subtotal * percentualImposto;
}

// 🆓 Função 6: Verificar frete grátis (pedidos acima de R$ 50)
/**
 * Verifica se o pedido tem direito a frete grátis.
 * @param {number} subtotal - O subtotal do pedido.
 * @returns {boolean} Retorna true se o frete for grátis, senão false.
 */
function verificarFreteGratis(subtotal) {
    return subtotal > 50;
}

// 🧾 Função 7: Calcular valor total final
/**
 * Calcula o valor final do pedido, somando subtotal, imposto e taxa de entrega.
 * @param {number} subtotal - O subtotal do pedido.
 * @param {number} imposto - O valor do imposto.
 * @param {number} taxaEntrega - O valor da taxa de entrega.
 * @returns {number} O valor total final.
 */
function calcularValorFinal(subtotal, imposto, taxaEntrega) {
    return subtotal + imposto + taxaEntrega;
}

// --- Função Principal para Interagir com o HTML ---

/**
 * Coleta os dados do formulário, calcula todos os valores e exibe na tela.
 */
function calcularPedidoCompleto() {
    // 1. Coleta os valores dos inputs
    const preco = parseFloat(document.getElementById("precoItem").value);
    const quantidade = parseInt(document.getElementById("quantidadeItem").value);
    const distancia = parseFloat(document.getElementById("distanciaEntrega").value);

    // 2. Chama as funções de cálculo em sequência
    const subtotal = calcularSubtotal(preco, quantidade);
    const imposto = calcularImposto(subtotal);
    let taxaEntrega = 0; // Inicia a taxa de entrega como zero

    // 3. Verifica se o frete é grátis e ajusta a taxa
    const freteGratis = verificarFreteGratis(subtotal);
    if (!freteGratis) {
        taxaEntrega = calcularTaxaEntrega(distancia);
    }
    
    // 4. Calcula o valor final
    const valorFinal = calcularValorFinal(subtotal, imposto, taxaEntrega);

    // 5. Exibe os resultados no HTML
    document.getElementById("resultadoSubtotal").textContent = `Subtotal: R$ ${subtotal.toFixed(2)}`;
    document.getElementById("resultadoImposto").textContent = `Imposto (8%): R$ ${imposto.toFixed(2)}`;
    document.getElementById("resultadoEntrega").textContent = `Taxa de Entrega: R$ ${taxaEntrega.toFixed(2)}`;
    
    if (freteGratis) {
        document.getElementById("resultadoFreteGratis").textContent = "Frete Grátis: Sim! 🎉";
        document.getElementById("resultadoFreteGratis").classList.add("destaque"); // Adiciona classe para destaque
    } else {
        document.getElementById("resultadoFreteGratis").textContent = "Frete Grátis: Não";
        document.getElementById("resultadoFreteGratis").classList.remove("destaque");
    }

    document.getElementById("resultadoFinal").textContent = `Valor Total do Pedido: R$ ${valorFinal.toFixed(2)}`;
}