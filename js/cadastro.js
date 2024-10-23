document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("register-button")
    const registrationForm = document.getElementById("registration-form")
    const messageArea = document.getElementById("message-area")

    registerButton.addEventListener("click", function () {
        // Faz a validação dos campos e mostra os erros, se existirem
        if (registrationForm.reportValidity()) {
            // Esconde o formulário
            registrationForm.style.display = 'none'
            
            // Exibe a mensagem de sucesso
            showMessage('Cadastro realizado com sucesso!', 'success')
        } else {
            // Exibe a mensagem de erro
            showMessage('Erro no cadastro. Por favor, verifique os campos!', 'danger')
        }
    });

    // Função para exibir mensagens de sucesso ou erro
    function showMessage(message, type) {
        messageArea.classList.remove('alert-success', 'alert-danger'); // Remove classes antigas
        messageArea.classList.add(`alert-${type}`); // Adiciona classe correspondente (success ou danger)
        messageArea.textContent = message
        messageArea.style.display = 'block'

        // Oculta a mensagem após 5 segundos
        setTimeout(function () {
            messageArea.style.display = 'none'
        }, 5000)
    }
})
