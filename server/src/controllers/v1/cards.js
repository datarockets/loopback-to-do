const Card = require('../../models').Card;

module.exports = {
  create(req, res) {
    return Card
      .create({
        description: req.body.description
      })
      .then((card) => res.status(201).send(card))
      .catch((error) => res.status(400).send(error));
  }
}
