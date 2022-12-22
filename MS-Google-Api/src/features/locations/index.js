
import { Router } from 'express'
import locationsRouter from './routers/locations.js'
import questionsAndAnswersRouter from './routers/qanda.js'

const LocationsRouter = Router()
LocationsRouter.use(locationsRouter)
LocationsRouter.use(questionsAndAnswersRouter)

export default LocationsRouter
