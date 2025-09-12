// ... (mantenha os códigos das Atividades 1 e 2 aqui) ...

// Atividade 3: Eventos de Formulário e Validação

// 1. Seleção dos elementos do formulário
const registrationForm = document.getElementById('registrationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailErrorMsg = document.getElementById('emailError');
const passwordStrengthBar = document.getElementById('passwordStrengthBar');
const passwordStrengthText = document.getElementById('passwordStrengthText');
const formSuccessMsg = document.getElementById('formSuccess');

// Variáveis de estado para controle da validação
let isEmailValid = false;
let isPasswordStrong = false;

// 2. Evento 'keyup' para o campo de e-mail (validação em tempo real)
emailInput.addEventListener('keyup', () => {
    // Regex (expressão regular) para validar o formato de e-mail.
    // É uma maneira muito poderosa de verificar padrões de texto.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Testa se o valor do input corresponde ao padrão do Regex.
    if (emailRegex.test(emailInput.value)) {
        emailErrorMsg.classList.add('hidden'); // Esconde a mensagem de erro
        isEmailValid = true; // Marca o e-mail como válido
    } else {
        emailErrorMsg.classList.remove('hidden'); // Mostra a mensagem de erro
        isEmailValid = false; // Marca o e-mail como inválido
    }
});

// 3. Evento 'keyup' para o campo de senha (verificação de força)
passwordInput.addEventListener('keyup', () => {
    const password = passwordInput.value;
    let strengthScore = 0;
    
    // Critérios para avaliar a força da senha
    if (password.length >= 8) {
        strengthScore += 1; // 1 ponto para comprimento mínimo
    }
    if (password.match(/[a-z]/)) {
        strengthScore += 1; // 1 ponto para letra minúscula
    }
    if (password.match(/[A-Z]/)) {
        strengthScore += 1; // 1 ponto para letra maiúscula
    }
    if (password.match(/[0-9]/)) {
        strengthScore += 1; // 1 ponto para número
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
        strengthScore += 1; // 1 ponto para caractere especial
    }
    
    // Atualiza a barra de progresso e o texto
    updatePasswordStrength(strengthScore);
});

// 4. Função para atualizar a força da senha visualmente
function updatePasswordStrength(score) {
    let strength = '';
    let barWidth = 0;
    let barColorClass = '';

    if (score === 0) {
        strength = '';
        barWidth = 0;
        isPasswordStrong = false;
    } else if (score < 3) {
        strength = 'Fraca';
        barWidth = (score / 5) * 100;
        barColorClass = 'strength-weak';
        isPasswordStrong = false;
    } else if (score < 5) {
        strength = 'Média';
        barWidth = (score / 5) * 100;
        barColorClass = 'strength-medium';
        isPasswordStrong = true;
    } else {
        strength = 'Forte';
        barWidth = 100;
        barColorClass = 'strength-strong';
        isPasswordStrong = true;
    }
    
    // Remove todas as classes de cor e adiciona a correta
    passwordStrengthBar.className = 'password-strength-bar ' + barColorClass;
    
    // Atualiza a largura da barra e o texto
    passwordStrengthBar.style.width = barWidth + '%';
    passwordStrengthText.textContent = strength ? `Força da senha: ${strength}` : '';
}

// 5. Evento 'submit' do formulário (prevenção de envio)
registrationForm.addEventListener('submit', (event) => {
    // A cada tentativa de envio, verificamos o estado das validações
    if (!isEmailValid || !isPasswordStrong) {
        // Usa preventDefault() para parar o comportamento padrão do formulário,
        // que seria recarregar a página e tentar enviar os dados.
        event.preventDefault();
        
        console.log('Formulário inválido. O envio foi bloqueado.');
        
        // Exibimos as mensagens de erro caso ainda estejam escondidas
        if (!isEmailValid) {
            emailErrorMsg.classList.remove('hidden');
        }
        // Nota: A validação da senha já acontece em tempo real.
        
        // Adiciona um alerta para feedback adicional
        alert('Por favor, corrija os campos destacados.');
    } else {
        // Se ambos os campos forem válidos, mostramos uma mensagem de sucesso
        // e o formulário seria, em um cenário real, enviado para um servidor.
        event.preventDefault(); // Ainda prevenimos o envio para simular a ação.
        formSuccessMsg.classList.remove('hidden');
        registrationForm.reset(); // Limpa os campos do formulário
        updatePasswordStrength(0); // Reinicia a barra de força
        console.log('Formulário enviado com sucesso!');
        
        // Oculta a mensagem de sucesso após alguns segundos
        setTimeout(() => {
            formSuccessMsg.classList.add('hidden');
        }, 5000);
    }
});