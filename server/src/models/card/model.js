module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    description: { type: DataTypes.STRING, allowNull: false },
    completedAt: { type: DataTypes.DATE, allowNull: true },
  }, {})

  Card.prototype.complete = function complete() {
    return this.update({ completedAt: Date.now() })
  }

  Card.prototype.uncomplete = function uncomplete() {
    return this.update({ completedAt: null })
  }

  return Card
}
