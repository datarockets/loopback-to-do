import axios from 'axios'

export default {
  cards: {
    getAll: async (responseHandler, errorHandler) => {
      try {
        responseHandler(await axios.get('http://localhost:5000/api/v1/cards'))
      } catch (error) {
        errorHandler(error)
      }
    },
  },
}
