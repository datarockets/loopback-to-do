'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Cards',
      'completedAt',
      {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Cards', 'completedAt')
  }
};
