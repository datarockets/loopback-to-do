import { Card } from '../../models'

module.exports = {
  create: (req, res) => {
    Card
      .create({
        description: req.body.description,
        raw: true,
      })
      .then((card) => { res.status(201).send(card) })
      .catch((error) => { res.status(400).send(error) })
  },

  getAll: (req, res) => {
    Card.findAll({ raw: true })
      .then((cards) => { res.status(200).send(cards) })
      .catch((error) => { res.status(400).send(error) })
  },
}
