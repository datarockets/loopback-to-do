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
    tags: {
      create: (card, responseHandler, errorHandler) => request(
        axios.post(routes.cardCompletion(card.id)),
        responseHandler,
        errorHandler,
      ),
    },
  },
}
