import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

const basename = path.basename(__filename)
const config = require('../config/database.js')[process.env.NODE_ENV || 'development']

const db = {}
const sequelize = new Sequelize(config.database, config.username, config.password, config)

// Establish connection to db
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

// Impot models from sources
fs
  .readdirSync(__dirname)
  .filter(file => (
    (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  ))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
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
db.cleanUp = async () => {
  sequelize.sync({ force: true })
}

module.exports = db
