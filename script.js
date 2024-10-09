// Dados de login pré-definidos para teste
const adminUser = "admin"
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

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar")
    const hamburgerMenu = document.getElementById("hamburger-menu")
    const dropdownMenu = document.getElementById("dropdown-menu")
    const logoElement = document.getElementById("logo")
    const userNameDisplay = document.getElementById("user-name")
    const logoutButton = document.getElementById("logout")

    // Lógica para abrir e fechar o menu dropdown ao clicar no menu hamburguer
    hamburgerMenu.addEventListener("click", function () {
        // Alterna a classe menu-active para abrir e fechar o menu
        navbar.classList.toggle("menu-active")
        // Alterna a visibilidade do dropdown
        if (navbar.classList.contains("menu-active")) {
            dropdownMenu.style.display = "block"
        } else {
            dropdownMenu.style.display = "none"
        }
    })

    // Lógica para logout (adiciona uma funcionalidade ao botão de logout)
    logoutButton.addEventListener("click", function () {
        // Reseta a interface para o estado inicial de login
        document.getElementById('admin-login').style.display = 'block'
        navbar.classList.remove("logged-in", "menu-active")
        logoElement.style.display = 'block' // Mostra a logo novamente
        hamburgerMenu.style.display = 'none'  // Oculta o menu hamburguer
        dropdownMenu.style.display = 'none'   // Oculta o dropdown
        userNameDisplay.style.display = 'none' // Oculta o nome do usuário
        document.getElementById('login-form').reset(); // Limpa os campos do formulário
    })
})
