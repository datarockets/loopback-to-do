const { Card } = require('../../../models')

module.exports = {
  create: (req, res) => {
    Card.findById(req.params.id)
      .then((card) => {
        card.update({
          completedAt: Date.now(),
        }).then(() => { res.status(201).send({ card: { completedAt: card.completedAt } }) })
          .catch((error) => { res.status(400).send(error) })
      })
      .catch((error) => { res.status(400).send(error) })
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
