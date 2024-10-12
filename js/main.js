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

    const cards = `
    
        <div class="card">
            <img src="./img/barber.jpg" alt="Servico1">
            <h3>Serviços 1</h3>
            <p>Descrição do serviço 1.</p>
            <button class="btn-card">Saiba Mais</button>
        </div>
      `
    
    element.innerHTML = cards
    
}
