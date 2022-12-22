import passport from 'passport'
import { OAuth2Strategy } from 'passport-google-oauth'

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))
passport.use(
  new OAuth2Strategy(
    {
      clientID: '788386524577-iprv3okgf4k16t3ndhaic95b9jiqpdap.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      const userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken
      }
      done(null, userData)
    }
  )
)
