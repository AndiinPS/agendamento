// navBarComponent()

// function navBarComponent() {

//     const element = document.getElementById('navbar-component')
//     const navbar = `
//     <nav class="navbar navbar-expand-lg fixed-top">
//     <div class="container">
//         <!-- <a class="navbar-brand" href="#">Navbar</a> logo da loja -->
//         <img src="./img/logo.jpg" height="40" alt="">
//         <button class="navbar-toggler bg-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav me-auto">
//                 <li class="nav-item">
//                     <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="index.html#services">Serviços</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="index.html#contact">Contato</a>
//                 </li>
//             </ul>
//             <ul class="navbar-nav me-1">
//                 <li class="nav-item">
//                     <a class="nav-link" href="login.html">Login</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>`

//     element.innerHTML = navbar

// }


navBarComponentTemplate()

function navBarComponentTemplate() {

    const element = document.getElementById('navbar-component')
    fetch("../components/nav-component.html")
        .then((res) => res.text())
        .then((nav) => {

            element.innerHTML = nav

        })
        .catch((error) => {

            console.error("Erro o carregar a navBar",error)

        })

}

// document.addEventListener('DOMContentLoaded', function () {
//     cardContent()
// })

// function cardContent() {
//     const element = document.getElementById('card-content')

//     const cards = `
//         <div class="card">
//             <img src="./img/barber.jpg" alt="Servico1">
//             <h3>Serviços 1</h3>
//             <p>Descrição do serviço 1.</p>
//             <button class="btn-card">Saiba Mais</button>
//         </div>
//     `

//     element.innerHTML = cards
// }
