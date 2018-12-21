import SequelizeDBMock from 'sequelize-mock'

const dbMock = new SequelizeDBMock()

module.exports = () => {
  const Card = dbMock.define('Card', {
    description: 'Homеwork',
  })

  return Card
}
