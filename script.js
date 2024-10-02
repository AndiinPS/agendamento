document.addEventListener('DOMContentLoaded', () => {
    fetchServices();
});

function fetchServices() {
    fetch('fetch_services.php')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('serviceCards');
            data.forEach(service => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${service.image_url}" alt="${service.service_name}">
                    <h3>${service.service_name}</h3>
                    <p>${service.description}</p>
                    <div class="card-price">Preço: R$${service.price}</div>
                    <button class="card-schedule">Agendar</button>
                `;
                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao buscar serviços:', error));
}

function openModal() {
    document.getElementById('scheduleModal').style.display = 'flex';
}


function closeModal() {
    document.getElementById('scheduleModal').style.display = 'none';
}


window.onclick = function(event) {
    const modal = document.getElementById('scheduleModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
