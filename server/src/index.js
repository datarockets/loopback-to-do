import 'app-module-path/cwd'
import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import middleware from 'src/middleware'
import apiRouter from 'src/routes/v1'
import config from 'src/config/server'

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

app.server.listen(config.port, () => {
  console.log(`Started ${process.env.NODE_ENV} env on port ${config.port}`)
})

export default app
