export async function cardComponent() {
    const localTemplate = 'components/cards.component/card.component.html'
    const localStyle = 'components/cards.component/card.component.css'
    const element = document.getElementById('card-component')
    if (!element) return

    element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`


    const services = await getServices()
    console.log(services)

    fetch(localTemplate)
        .then((res) => res.text())
        .then((component) => {

            element.innerHTML = montarCard(services, component)

        })
        .catch((error) => {
            console.error("Erro ao montar o componente: ", error);
        })
}

function montarCard(dados, template) {

    let result = ""
    for (let i = 0; i < dados.length; i++) {

        let newTemplate = template
        result += newTemplate
            .replace("{{imageUrl}}", dados[i].imageUrl)
            .replace("{{title}}", dados[i].title)
            .replace("{{description}}", dados[i].description)
    }
    return result

}

async function getServices() {
    let result = []
    await fetch('mocks/service.json')
        .then((res) => res.json())
        .then((dados) => {
            result = dados
        })
        .catch((error) => {
            console.error("Erro ao montar o componente: ", error);
        })
    return result


} 