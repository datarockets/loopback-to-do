import read from 'fs-readdir-recursive'
import path from 'path'
import Sequelize from 'sequelize'

const config = require('src/config/database.js')[process.env.NODE_ENV || 'development']

const db = {}
const sequelize = new Sequelize(config.database, config.username, config.password, config)

// Impot models from sources
read(__dirname)
  .filter(fileName => fileName.endsWith('model.js'))
  .forEach((fileName) => {
    const model = sequelize.import(path.join(__dirname, fileName))
    db[model.name] = model
  })

// Build associations between models
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.cleanUp = async () =>
  sequelize.sync({ force: true })

db.connect = async () =>
  sequelize.authenticate()
    .catch(err => console.error('Unable to connect to the database:', err))

module.exports = db
