const BASE_URL = 'http://localhost:5000/api/v1'

const routes = {
  cards: () => `${BASE_URL}/cards`,
  card: id => `${BASE_URL}/cards/${id}`,
  cardCompletion: id => `${routes.card(id)}/completion`,
  cardTags: id => `${routes.card(id)}/tags`,
  cardTag: (cardId, tagId) => `${routes.cardTags(cardId)}/${tagId}`,
}

export default routes
