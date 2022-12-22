import { getLocation } from '../controllers/index.js'
import { Router } from 'express'
// import { Axios } from 'axios'
const locationsRouter = Router()

// route specific middleware
locationsRouter.use((req, res, next) => {
  next()
})

/**
 * @swagger
 * /location:
 *   get:
 *     description: Gets a location
 *     responses:
 *       200:
 *         description: Returns a location
 */
locationsRouter.get('/', async (req, res, _next) => {
  const response = await getLocation('Restaurant A')
  if (response.success === true) {
    res.status(200).json(response)
  } else {
    res.status(404).json(response)
  }
})

// other features get dumped in this export, not pretty but better than index.js dumping
export default locationsRouter
