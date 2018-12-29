import { cardsController } from 'src/controllers/v1'

module.exports = router =>
  router
    .post('/cards', cardsController.create)
    .delete('/cards/:id', cardsController.destroy)
    .get('/cards', cardsController.getAll)
