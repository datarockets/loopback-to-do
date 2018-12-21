const routes = {
  baseUrl: 'http://localhost:5000/api/v1',

  cards: () => `${routes.baseUrl}/cards`,
  card: id => `${routes.baseUrl}/card/${id}`,
  cardCompletion: id => `${routes.card(id)}/completion`,
}

export default routes
