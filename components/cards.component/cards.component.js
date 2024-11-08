export function cardComponent() {

    const localTemplate = 'components/cards.component/cards.component.html';
    const localStyle = 'components/cards.component/cards.component.css';
    const element = document.getElementById('#services'); 
    if (!element) return;

    // Carrega o template externo
    fetch(localTemplate)
        .then((res) => res.text())
        .then((template) => {
            
            element.innerHTML = template;

            
            const cardData = [
                {
                    title: 'Corte de Cabelo',
                    description: 'Corte de cabelo profissional feito por especialistas.',
                    imageUrl: 'img\logo.jpg'
                },
                {
                    title: 'Barba',
                    description: 'Aparação e estilização da barba com precisão.',
                    imageUrl: 'img\logo.jpg'
                },
                {
                    title: 'Massagem Capilar',
                    description: 'Relaxe com uma massagem capilar revitalizante.',
                    imageUrl: 'img\logo.jpg'
                }
            ];

            const cardContainer = document.getElementById('card-content');
            
            
            cardData.forEach(card => {
                const cardHTML = `
                    <div class="card">
                        <img src="${card.imageUrl}" class="card-img-top" alt="${card.title}">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.description}</p>
                        </div>
                    </div>
                `;
                
                cardContainer.innerHTML += cardHTML;
            });
        })
        .catch((error) => {
            console.error("Erro ao carregar os cards", error);
        });
}
