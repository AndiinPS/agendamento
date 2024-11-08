
export function cardComponent() {

    const localTemplate = 'components\cards.component\cards.component.html'
    const localStyle = 'components\cards.component\cards.component.css'
    const element = document.getElementById('card-component')
    if (!element) return
    element.innerHTML = ''
    element.innerHTML += `<link rel="stylesheet" href="${localStyle}">` 
    
    fetch(localTemplate)
        .then((res) => res.text())
        .then((nav) => {

            element.innerHTML += nav

        })
        .catch((error) => {

            console.error("Erro o carregar a navBar",error)

        })

}