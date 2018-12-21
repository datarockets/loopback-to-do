require('dotenv').config()

module.exports = {
  port: process.env.PORT || 5000,
  bodyLimit: '100kb',
  corsHeaders: ['Link']
}
