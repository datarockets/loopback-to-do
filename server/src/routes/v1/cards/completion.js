import { cardCompletionController } from 'src/controllers/v1'

module.exports = router =>
  router
    .post('/cards/:id/completion', cardCompletionController.create)
    .delete('/cards/:id/completion', cardCompletionController.destroy)
