const adminUser = "admin"
const adminPassword = "1234"

function realizarLogin() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username === adminUser && password === adminPassword) {
        document.getElementById('admin-login').style.display = 'none'
        document.getElementById('admin-section').style.display = 'block'
    } else {
        document.getElementById('login-error').style.display = 'block'
    }
}

function atualizarCard() {
    const cardNumber = document.getElementById('card-number').value
    const cardTitle = document.getElementById('card-title').value
    const cardDescription = document.getElementById('card-description').value
    const cardImageURL = document.getElementById('card-image').value

    const cardIndex = cardNumber - 1
    const cards = document.querySelectorAll('.card')

    if (cardIndex >= 0 && cardIndex < cards.length) {
        const card = cards[cardIndex]
        card.querySelector('h3').textContent = cardTitle
        card.querySelector('p').textContent = cardDescription
        card.querySelector('img').src = cardImageURL

        alert(`Card ${cardNumber} atualizado com sucesso!`)
    } else {
        alert('Número do card inválido!')
    }
}

function adicionarNovoCard() {
    const newCardTitle = document.getElementById('new-card-title').value
    const newCardDescription = document.getElementById('new-card-description').value
    const newCardImage = document.getElementById('new-card-image').value

    // Criar um novo card HTML
    const newCard = document.createElement('div')
    newCard.classList.add('card')

    newCard.innerHTML = `
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

// Event Listeners
document.getElementById('login-button').addEventListener('click', realizarLogin)
document.getElementById('update-card').addEventListener('click', atualizarCard)
document.getElementById('add-new-card').addEventListener('click', adicionarNovoCard)
