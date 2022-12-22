import express, { json } from 'express'
import initalizeMongo from './src/config/db.js'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import router from './src/routes.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import passport from 'passport'
import { fileURLToPath } from 'url'
// eslint-disable-next-line no-unused-vars
import * as _a from './src/auth/passport.google.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

console.time('Up and running 🚀, startup time')
dotenv.config()
const app = express()
initalizeMongo()

app.use(json())
app.use('', router)
app.use(morgan(process.env.MORGAN_MODE))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// gOauthRouter
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
  origin: process.env.AUTHORIZED_URLS
}))

app.use(passport.initialize())
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: 'aiGots internal Google API handler',
      description: 'itty bitty titty committee'
    }
  },
  apis: [
    './src/routes.js']
})))

// catch 404 and forward to error handler
// app.use((req, res, next) => next(createError(404)))

// error handler
// app.use(function (err, req, res, next) {
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}
//   res.status(err.status || 500)
//   res.render('error')
// })

app.listen(process.env.PORT || 5000, () => {
  console.timeEnd('Up and running 🚀, startup time')
  console.log(`Port : ${process.env.PORT || 5000}`)
})
