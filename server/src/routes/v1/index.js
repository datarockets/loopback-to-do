import { Router } from 'express'

const router = Router()

require('./cards')(router)
require('./cards/completion')(router)

export default router
