const cardsController = require('../../controllers/v1').cards

module.exports = (router) => {
  router
    .post('/cards', cardsController.create)
    .get('/cards', cardsController.ded)
}
