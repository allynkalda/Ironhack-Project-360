const express = require('express')
const router = express.Router()
const Users = require('./../models/usersSchema')
const Survey = require('./../models/surveySchema')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET Users page. */
router.get('/users', function (req, res, next) {
  Users.find({})
    .then((users) => res.render('users', { users }))
    .catch((err) => console.log(err))
})

/* GET Survey page. */
router.get('/survey/:id', function (req, res, next) {
  const { id } = req.params
  res.render('survey')
})


module.exports = router
