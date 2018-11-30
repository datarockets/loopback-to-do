const { Card } = require('../../models')

module.exports = {
  create(req, res) {
    return Card
      .create({
        description: req.body.description,
      })
      .then(() => { res.status(201).send() })
      .catch((error) => { res.status(400).send(error) })
  },
}
