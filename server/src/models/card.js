module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    description: DataTypes.STRING,
  }, {})

  return Card
}
