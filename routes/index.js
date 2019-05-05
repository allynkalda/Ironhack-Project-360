const express = require('express')
const router = express.Router()
const Users = require('./../models/usersSchema')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET Directory page. */
router.get('/directory', function (req, res, next) {
  Users.find({ })
    .then((users) => res.render('directory', { users }))
    .catch((err) => console.log(err))
})

/* GET Directory page. */
router.get('/users', function (req, res, next) {
  Users.find({ })
    .then((users) => res.render('users', { users }))
    .catch((err) => console.log(err))
})

module.exports = router
