import { Router } from 'express'

const api = Router()

api.get('/', (req, res) => {
  res.json('Hi from /api/v1')
})

require('./cards')(api)

export default api
