const completionController = require('../../../controllers/v1').completion

module.exports = (router) => {
  router
    .post('/cards/:id/completion', completionController.create)
    .delete('/cards/:id/completion', completionController.destroy)
}
