document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("register-button")
    const registrationForm = document.getElementById("registration-form")
    const messageArea = document.getElementById("message-area")

    registerButton.addEventListener("click", function () {
        // Validação dos campos (simples)
        if (registrationForm.checkValidity()) {
            // Esconde o formulário
            registrationForm.style.display = 'none'
            // Cria a mensagem de sucesso
            messageArea.style.display = 'block'
            messageArea.innerHTML = "<p style='color: green; font-size: 20px;'>Cadastro realizado com sucesso!</p>"
        } else {
            // Mostra mensagem de erro se o formulário não for válido
            messageArea.style.display = 'block'
            messageArea.innerHTML = "<p style='color: red; font-size: 20px;'>Erro no cadastro. Por favor, verifique os campos.</p>"
        }
    })
})
