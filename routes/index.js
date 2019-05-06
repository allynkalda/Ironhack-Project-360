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
    evaluated: req.params.id,
    technical: 0,
    social: 0
  }

  Survey.create(survey)
    .then((newSurvey) => {
      console.log('Survey 0 - newSurvey', newSurvey)
      res.render('survey/survey1', { id: newSurvey._id })
      // console.log(id)
    })
    .catch((err) => console.log(err))
})

/* POST Survey page. */
router.post('/survey1/:id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { technical: numbers })
    .then((result) => console.log('Tech field successfuly updated', result))
  res.render('survey/survey2')
    .catch(err => console.log(err))
})

/* GET Survey2 page. */
router.get('/survey12s', function (req, res, next) {
  res.render('survey/survey2')
})

module.exports = router
