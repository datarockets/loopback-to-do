import { Card } from '../../../models'

module.exports = {
  create: (req, res) => {
    Card.findByPk(req.params.id)
      .then(card => card.complete())
      .then((card) => {
        res.status(201).send({ card: { completedAt: card.completedAt } })
      })
      .catch(error => res.status(400).send(error))
  },

  destroy: (req, res) => {
    Card.findByPk(req.params.id)
      .then(card => card.uncomplete())
      .then(() => res.status(204).send())
      .catch(error => res.status(400).send(error))
  },
}
