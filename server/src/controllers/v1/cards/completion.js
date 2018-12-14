const { Card } = require('../../../models')

module.exports = {
  create: (req, res) => {
    res.send('test')
  },
  destroy: (req, res) => {
    Card.findById(req.params.id)
      .then((card) => {
        card.update({
          completedAt: null,
        }).then(() => { res.status(204).send() })
          .catch((error) => { res.status(400).send(error) })
      })
      .catch((error) => { res.status(400).send(error) })
  },
}
