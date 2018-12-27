const cardsController = require('../../controllers/v1').cards

module.exports = router =>
  router
    .post('/cards', cardsController.create)
    .delete('/cards/:id', cardsController.destroy)
    .get('/cards', cardsController.getAll)
