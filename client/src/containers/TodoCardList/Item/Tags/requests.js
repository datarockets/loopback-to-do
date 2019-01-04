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
  card: {
    tags: {
      create: (card, responseHandler, errorHandler) => request(
        axios.post(routes.cardTags(card.id)),
        responseHandler,
        errorHandler,
      ),
    },
  },
}
