import axios from 'axios'

export default {
  cards: {
    create: async (newCard, responseHandler, errorHandler) => {
      try {
        responseHandler(await axios.post('http://localhost:5000/api/v1/cards', newCard))
      } catch (error) {
        errorHandler(error)
      }
    },
  },
}
