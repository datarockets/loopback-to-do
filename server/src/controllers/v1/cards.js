const { Card } = require('../../models')

module.exports = {
  create(req, res) {
    return Card
      .create({
        description: req.body.description,
      })
      .then((card) => { res.status(201).send(card.dataValues) })
      .catch((error) => { res.status(400).send(error) })
  },
}
