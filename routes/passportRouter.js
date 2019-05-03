const express = require('express')
const passportRouter = express.Router()
// Require user model and config for cloudinary
const User = require('../models/usersSchema')
const parser = require('../config/cloudinary')
// Add bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10
// Add passport
const passport = require('passport')

passportRouter.get('/login', (req, res, next) => {
  console.log('inside here')
  res.render('passport/login')
})

passportRouter.post('/login', passport.authenticate('local', {
  successRedirect: 'passport/login',
  failureRedirect: 'error',
  passReqToCallback: true
}))

passportRouter.get('/signup', (req, res, next) => {
  res.render('passport/signup')
})

passportRouter.post('/signup', parser.single('image'), (req, res, next) => {
  const image = req.file.secure_url
  const { username, password, firstName, lastName, department, position } = req.body

  if (username === '' || password === '') {
    res.render('passport/signup', { message: 'Indicate username and password' })
    return
  }

  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render('passport/signup', { message: 'The username already exists' })
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)

      const newUser = new User({ username, image, firstName, lastName, department, position, password: hashPass })

      newUser.save((err) => {
        if (err) res.render('/signup', { message: 'Something went wrong' })
        else res.redirect('/login')
      })
    })
    .catch(error => next(error))
})

const ensureLogin = require('connect-ensure-login')

passportRouter.get('/private', ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render('passport/private', { user: req.user })
})

module.exports = passportRouter
