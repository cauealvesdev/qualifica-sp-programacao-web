// Atividade 4: Convertendo para Arrow Functions

// Exemplo: Função original para comparação
/*
function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}
*/

// --- Funções convertidas para Arrow Functions ---

// 🛒 Função para calcular o subtotal
const calcularSubtotal = (preco, quantidade) => preco * quantidade;

// 💰 Função para calcular o imposto
const calcularImposto = subtotal => subtotal * 0.08;

// 🚚 Função para calcular a taxa de entrega
const calcularTaxaEntrega = (distanciaKm) => {
    const taxaBase = 5.00;
    const taxaPorKm = 1.50;
    return taxaBase + (distanciaKm * taxaPorKm);
};

// 🆓 Função que verifica frete grátis - Mantida como função tradicional para demonstração
function verificarFreteGratis(subtotal) {
    const valorMinimo = 50.00;
    return subtotal >= valorMinimo;
}

// 🧾 Função para calcular o valor final - Mantida como função tradicional para demonstração
function calcularValorFinal(subtotal, imposto, taxaEntrega) {
    return subtotal + imposto + taxaEntrega;
}

// --- Função Principal para Interagir com o HTML ---
// (Esta função pode permanecer como está ou ser convertida também)

function processarPedido() {
    // 1. Coletar os valores dos campos de entrada
    const preco = parseFloat(document.getElementById("precoItem").value) || 0;
    const quantidade = parseInt(document.getElementById("quantidadeItem").value) || 0;
    const distancia = parseFloat(document.getElementById("distanciaEntrega").value) || 0;

    // 2. Chamar as novas arrow functions
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

// 👋 Função de boas-vindas - Convertida para arrow function
const boasVindas = () => {
    const nomeUsuario = "Cliente"; 
    document.getElementById("boasVindas").textContent = `Olá, ${nomeUsuario}! Faça seu pedido abaixo.`;
};