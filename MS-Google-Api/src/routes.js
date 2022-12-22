import { Router } from 'express'
import LocationsRouter from './features/locations/index.js'
import gOauthRouter from './auth/googleoauth2.router.js'
const router = Router()

router.use('/locations', LocationsRouter)
router.use('', gOauthRouter)
export default router
