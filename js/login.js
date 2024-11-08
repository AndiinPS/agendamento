// Dados de login pré-definidos para teste
const adminUser = "andiinps@gmail.com"
const adminPassword = "1234"

// Função para realizar login
function realizarLogin() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username === adminUser && password === adminPassword) {
        // Esconde a seção de login após sucesso
        document.getElementById('admin-login').style.display = 'none'

        // Exibe o menu hamburguer e oculta a logo após login
        const navbar = document.querySelector(".navbar")
        const logoElement = document.getElementById("logo")
        const hamburgerMenu = document.getElementById("hamburger-menu")

        // Ocultar a logo e exibir o menu hamburguer
        logoElement.style.display = 'none' // Oculta a logo
        hamburgerMenu.style.display = 'flex'  // Exibe o menu hamburguer

        // Adiciona a classe logged-in para alterar o layout da navbar
        navbar.classList.add("logged-in")

        // Alterar o texto de "Início" para o nome do usuário logado
        const userNameDisplay = document.getElementById("user-name")
        userNameDisplay.textContent = username

        // Exibir o nome do usuário na navbar
        userNameDisplay.style.display = 'block'
    } else {
        document.getElementById('login-error').style.display = 'block'
    }
}

document.getElementById('login-button').addEventListener('click', realizarLogin)

