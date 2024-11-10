export async function cardComponent() {
  const localTemplate = "components/cards.component/cards.component.html";
  const localStyle = "components/cards.component/cards.component.css";
  const element = document.getElementById("#services");
  if (!element) return;

  // Carrega o template externo
  let template = "";
  fetch(localTemplate)
    .then((res) => res.text())
    .then((template) => {
      template = data;
    });

  const cardContainer = document.querySelector("#card-content");
}

//Montar de colaboradores
const cards = await getCards();
for (const cadr of cards) {
  let copytTemplate = template;
  copytTemplate = copytTemplate
    .replace("{{title}}", card.title)
    .replace("{{description}}", card.description)
    .replace("{{imageUrl}}", card.imageUrl);
  element.innerHTML += copytTemplate;
}

async function getCard() {
  const card = {};
  let result;
  await fetch("mocks/cards.json")
    .then((res) => res.json())
    .then((data) => {
      result = data;
    });
  return result;
}
