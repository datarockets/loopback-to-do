import { Router } from 'express'

const api = Router()

api.get('/', (req, res) => {
  res.json('Hi from /api/v1')
})

export default api
