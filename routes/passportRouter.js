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
  successRedirect: '/directory',
  failureRedirect: 'passport/login',
  passReqToCallback: true
}))

passportRouter.get('/signup', (req, res, next) => {
  res.render('passport/signup')
})

<<<<<<< HEAD
passportRouter.post('/signup', (req, res, next) => {
  const { username, password } = req.body
=======
passportRouter.post('/signup', parser.single('image'), (req, res, next) => {
  const image = req.file.secure_url
  const { username, password, firstName, lastName, department, position } = req.body
>>>>>>> d35428e5963e3244f5489f20d5dc59c06142fb2f

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

<<<<<<< HEAD
      const newUser = new User({ username, password: hashPass })
=======
      const newUser = new User({ username, image, firstName, lastName, department, position, password: hashPass })
>>>>>>> d35428e5963e3244f5489f20d5dc59c06142fb2f

      newUser.save((err) => {
        if (err) res.render('passport/signup', { message: 'Something went wrong' })
        else res.redirect('/directory')
      })
    })
    .catch(error => next(error))
})

const ensureLogin = require('connect-ensure-login')

<<<<<<< HEAD
passportRouter.get('/directory', ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render('directory', { user: req.user })
=======
passportRouter.get('/private', ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render('passport/private', { user: req.user })
>>>>>>> d35428e5963e3244f5489f20d5dc59c06142fb2f
})

module.exports = passportRouter
