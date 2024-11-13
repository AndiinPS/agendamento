// Função para buscar os dados dos cards a partir de um arquivo JSON
async function getCards() {
  try {
    const response = await fetch("mocks/cards.json");  // Caminho do arquivo JSON com os dados dos cards
    const data = await response.json();
    return data;  // Retorna os dados dos cards
  } catch (error) {
    console.error("Erro ao carregar os cards:", error);
    return [];  // Retorna um array vazio em caso de erro
  }
}

export async function cardComponent() {
  const localTemplate = "components/cards.component/cards.component.html";  // Caminho do template
  const element = document.getElementById("services");  // Elemento onde os cards serão inseridos

  if (!element) return; // Se o elemento não existir, sai da função

  // Carregar o template externo (HTML)
  let template = "";
  try {
    const response = await fetch(localTemplate);
    template = await response.text();
  } catch (error) {
    console.error("Erro ao carregar o template:", error);
    return;
  }

  // Carregar os dados dos cards (mock JSON)
  const cards = await getCards();
  if (!cards || cards.length === 0) return; // Se não houver cards, sai da função

  const cardContainer = document.querySelector("#card-content");  // Seleciona o container onde os cards serão inseridos
  if (!cardContainer) return; // Verifica se o container de cards existe

  // Para cada card, substituir os placeholders do template com os dados reais
  cards.forEach((card) => {
    let cardTemplate = template;
    cardTemplate = cardTemplate
      .replace("{{title}}", card.title || "Sem título")  // Substitui {{title}} pelo título real do card
      .replace("{{description}}", card.description || "Sem descrição")  // Substitui {{description}}
      .replace("{{imageUrl}}", card.imageUrl || "default-image.jpg");  // Substitui {{imageUrl}} com a URL da imagem

    // Adiciona o card processado ao container
    cardContainer.innerHTML += cardTemplate;
  });
}
