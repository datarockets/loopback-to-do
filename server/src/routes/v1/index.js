import { Router } from 'express'

const router = Router()

require('./cards')(router)

export default router
