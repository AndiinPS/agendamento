


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


document.getElementById('login-button').addEventListener('click', realizarLogin)


document.getElementById('update-card').addEventListener('click', atualizarCard)
