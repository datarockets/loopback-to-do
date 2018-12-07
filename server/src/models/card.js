module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    description: { type: DataTypes.STRING, allowNull: false },
  }, {})

  return Card
}
