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
      create: (card, newTag, responseHandler, errorHandler) => request(
        axios.post(routes.cardTags(card.id), newTag),
        responseHandler,
        errorHandler,
      ),
      delete: (card, tag, responseHandler, errorHandler) => request(
        axios.delete(routes.cardTag(card.id, tag.id)),
        responseHandler,
        errorHandler,
      ),
    },
  },
}
