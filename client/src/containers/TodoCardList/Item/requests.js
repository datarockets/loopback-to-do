import axios from 'axios'
import routes from 'src/server'

const request = async (promise, responseHandler, errorHandler) => {
  try {
    responseHandler(await promise)
  } catch (error) {
    errorHandler(error)
  }
}

export default {
  cards: {
    completion: {
      create: (card, responseHandler, errorHandler) => request(
        axios.post(routes.cardCompletion(card.id)),
        responseHandler,
        errorHandler,
      ),
      delete: (card, responseHandler, errorHandler) => request(
        axios.delete(routes.cardCompletion(card.id)),
        responseHandler,
        errorHandler,
      ),
    },
    delete: (card, responseHandler, errorHandler) => request(
      axios.delete(routes.card(card.id)),
      responseHandler,
      errorHandler,
    ),
  },
}
