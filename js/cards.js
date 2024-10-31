document.addEventListener("DOMContentLoaded", function() {
    // Array com os serviços
    const services = [
        {
            title: "Corte de Cabelo",
            description: "Corte moderno e estiloso para todas as idades.",
            image: "../img/barber.jpg"
        },
        {
            title: "Barba",
            description: "Serviço completo de barba, com toalha quente e óleos especiais.",
            image: "../img/barber.jpg"
        },
        {
            title: "Massagem",
            description: "Massagem relaxante para aliviar o estresse.",
            image: "../img/barber.jpg"
        },
        {
            title:"",
            description:"",
            image:""
        }
    ];

    // Selecionar o container onde os cards serão adicionados
    const cardContent = document.getElementById("card-content");

    // Função para criar e adicionar os cards dinamicamente
    services.forEach(service => {
        // Criando o card com classes do Bootstrap
        const card = document.createElement("div");
        card.classList.add("card", "m-2");
        card.style.width = "18rem";

        // Adicionando o conteúdo ao card
        card.innerHTML = `
            <img src="${service.image}" class="card-img-top" alt="${service.title}">
            <div class="card-body">
                <h5 class="card-title">${service.title}</h5>
                <p class="card-text">${service.description}</p>
            </div>
        `;

        // Adicionando o card ao container
        cardContent.appendChild(card);
    });
});
