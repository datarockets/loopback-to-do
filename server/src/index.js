import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import middleware from './middleware'
import apiRouter from './routes/v1'
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
app.use('/api/v1', apiRouter)
// internal middleware
app.use(middleware())

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`Started ${process.env.NODE_ENV} env on port ${app.server.address().port}`)
})

export default app
