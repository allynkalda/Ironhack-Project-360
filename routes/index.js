const express = require('express')
const router = express.Router()
const Users = require('./../models/usersSchema')
const Survey = require('./../models/surveySchema')

function checkIfAuthenticated (req, res, next) {
  if (req.user) next()
  else res.render('index', { title: 'Express' })
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET Users page. */
router.get('/users', checkIfAuthenticated, function (req, res, next) {
  // console.log('req.user', req.user)

  const { _id } = req.user

  Users.find({ '_id': { $ne: _id } })
    .then((users) => res.render('users', { users }))
    .catch((err) => console.log(err))
})

/* GET Survey page. */
router.get('/survey/:id', function (req, res, next) {
  const survey = {
    evaluator: req.user.id,
    evaluated: req.params.id
  }

  Survey.create(survey)
    .then((newSurvey) => {
      console.log('Survey 0 - newSurvey', newSurvey)
      res.render('survey/survey1', { id: newSurvey._id })
    })
    .catch((err) => console.log(err))

  console.log(survey.evaluator)
})

/* POST Survey page. */
router.post('/survey/:id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { technical: numbers })
    .then((result) => {
      res.render('survey/survey2', { id: result._id })
    })
    .catch((err) => console.log(err))
})

/* POST Survey1 page. */
router.post('/survey1/:id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { social: numbers })
    .then((result) => {
      console.log(result)
      res.render('survey/survey3', { id: result._id })
    })
    .catch((err) => console.log(err))
})

/* POST Survey2 page. */
router.post('/survey2/:id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { leadership: numbers })
    .then((result) => {
      console.log(result)
      res.render('survey/survey4', { id: result._id })
    })
    .catch((err) => console.log(err))
})

/* POST Survey3 page. */
router.post('/survey3/:id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { organizational: numbers })
    .then((result) => {
      console.log(result)
      res.render('survey/survey5', { id: result._id })
    })
    .catch((err) => console.log(err))
})

/* POST Survey4 page. */
router.post('/survey4/:id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { motivation: numbers })
    .then((result) => {
      console.log(result)
      res.render('survey/survey6', { id: result._id })
    })
    .catch((err) => console.log(err))
})

/* POST Survey4 page. */
router.post('/survey5/:id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { answer } = req.body
  const id = req.params.id
  console.log(id)
  console.log(answer)

  Survey.findOneAndUpdate({ _id: id }, { review: answer })
    .then((result) => {
      console.log(result)
      res.render('survey/survey7', { id: result._id })
    })
    .catch((err) => console.log(err))
})

module.exports = router
