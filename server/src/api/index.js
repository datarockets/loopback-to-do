import { Router } from 'express'

const api = Router()

api.get('/', (req, res) => {
  res.json('Hi from /api')
})

export default api
