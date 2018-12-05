require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USER,
    password: null,
    database: 'todo-list-db-test',
    host: '127.0.0.1',
    port: 5432,
    operatorsAliases: false,
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'todo-list-db-production',
    host: '127.0.0.1',
    operatorsAliases: false,
    dialect: 'postgres',
  },
}
