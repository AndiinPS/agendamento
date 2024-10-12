navBarComponent()

function navBarComponent() {

    const element = document.getElementById('navbar-component')
    const navbar = `
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="index.html">Início</a></li>
                <li><a href="index.html#services">Serviços</a></li>
                <li><a href="index.html#contact">Contato</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="cadastro.html">Cadastro</a></li>
            </ul>
        </nav>`

    element.innerHTML = navbar

}

cardContent()

function cardContent() {
    const element = document.getElementById('card-content')
    // Criar um novo card HTML
    const Card = ` 
    <div class="card-container">
        <div class="card">
            <img src="./img/barber.jpg" alt="Serviço 1">
            <h3>Serviço 1</h3>
            <p>Descrição do serviço 1.</p>
            <button class="btn-card">Saiba Mais</button>
        </div>
    </div>`

    Card.classList.add('card')``

    Card.innerHTML = `
        <img src="${newCardImage}" alt="${newCardTitle}">
        <h3>${newCardTitle}</h3>
        <p>${newCardDescription}</p>
        <button class="btn-card">Saiba Mais</button>
    `

    // Adicionar o novo card à seção de serviços na index.html
    const cardContainer = document.querySelector('.card-container')
    cardContainer.appendChild(newCard)

    alert('Novo card adicionado com sucesso!')

    // Limpar os campos do formulário
    document.getElementById('new-card-title').value = ''
    document.getElementById('new-card-description').value = ''
    document.getElementById('new-card-image').value = ''
}