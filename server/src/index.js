import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import middleware from './middleware'
import api from './api/v1'
import config from './config.json'

require('dotenv').config()

const app = express()
app.server = http.createServer(app)

// logger
app.use(morgan('dev'))

// 3rd party middleware
app.use(cors({
  exposedHeaders: config.corsHeaders,
}))

app.use(bodyParser.json({
  limit: config.bodyLimit,
}))

// api router
app.use('/api/v1', api)
// internal middleware
app.use(middleware())

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${app.server.address().port}`)
})

export default app
