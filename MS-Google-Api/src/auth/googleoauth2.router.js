import { Router } from 'express'
import passport from 'passport'

const gOauthRouter = Router()
/* GET home page. */
gOauthRouter.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

/* GET Google Authentication API. */
gOauthRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email', ''] }))

gOauthRouter.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/', session: false }),
  (req, res) => {
    const token = req.user.token
    res.redirect('http://localhost:5173?token=' + token)
  }
)

export default gOauthRouter
