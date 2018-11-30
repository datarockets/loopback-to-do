const cardsController = require('../../controllers/v1').cards;

module.exports = (api) => {
  api.post('/cards', cardsController.create);
};
