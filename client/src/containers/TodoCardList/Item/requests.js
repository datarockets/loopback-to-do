import axios from 'axios'

export default {
  card: {
    update: async (updatedCard, responseHandler, errorHandler) => {
      try {
        responseHandler(
          await axios.patch(
            `http://localhost:5000/api/v1/cards/${updatedCard.id}`,
            { readiness: updatedCard.readiness },
          ),
        )
      } catch (error) {
        errorHandler(error)
      }
    },
  },
}
