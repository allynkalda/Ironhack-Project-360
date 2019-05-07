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
router.get('/survey/:userId&id', function (req, res, next) {
  const survey = {
    evaluator: req.user.id,
    evaluated: req.params.userId
  }

  Survey.create(survey)
    .then((newSurvey) => {
      console.log('Survey 0 - newSurvey', newSurvey)
      res.render('survey/survey1', { id: newSurvey._id, userId: req.params.userId })
      // console.log(id)
    })
    .catch((err) => console.log(err))
})

/* POST Survey page. */
router.post('/survey/:userId&id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { technical: numbers })
    .then((result) => {
      res.render('survey/survey2', { id: result._id, userId: req.params.userId })
    })
    .catch((err) => console.log(err))
})


router.post('/survey/:userId&id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { technical: numbers })
    .then((result) => {
      res.render('survey/survey2', { id: result._id, userId: req.params.userId })
    })
    .catch((err) => console.log(err))
})

// /* GET Survey page. */
// router.get('/survey1/:id', function (req, res, next) {
//   res.render('survey/survey2')
//   // console.log(id)
// })

/* POST Survey1 page. */
router.post('/survey1/:userId&id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { social: numbers })
    .then((result) => {
      console.log(result)
      res.render('survey/survey3', { id: result._id, userId: req.params.userId })
    })
    .catch((err) => console.log(err))
})

/* POST Survey2 page. */
router.post('/survey2/:userId&id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { leadership: numbers })
    .then((result) => {
      console.log(result)
      res.render('survey/survey4', { id: result._id, userId: req.params.userId })
    })
    .catch((err) => console.log(err))
})

/* POST Survey3 page. */
router.post('/survey3/:userId&id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { organizational: numbers })
    .then((result) => {
      console.log(result)
      res.render('survey/survey5', { id: result._id, userId: req.params.userId })
    })
    .catch((err) => console.log(err))
})

/* POST Survey4 page. */
router.post('/survey4/:userId&id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { numbers } = req.body
  const id = req.params.id
  console.log(id)
  console.log(numbers)

  Survey.findOneAndUpdate({ _id: id }, { motivation: numbers })
    .then((result) => {
      console.log(result)
      res.render('survey/survey6', { id: result._id, userId: req.params.userId })
    })
    .catch((err) => console.log(err))
})

/* POST Survey5 page. */
router.post('/survey5/:userId&id', function (req, res, next) {
  console.log('survey post id', req.params.id)
  const { answer } = req.body
  const id = req.params.id
  const user = req.params.userId;
  console.log(user)
 

  Survey.findOneAndUpdate({ _id: id }, { review: answer })
    .then((result) => {
      console.log(result)
      res.render('survey/survey7', { id: result._id, userId: req.params.userId })
    })
    .catch((err) => console.log(err))
})

/* POST round and surveyNum page. */
//name=John+Doe&gender=male&family=5&city=kent&city=miami&
// const evaluator = req.user.id
// router.post('/sent/:id', function (req, res, next) {

//   const evaluator = req.user.id
//   const surveyId = req.params.id
//   const evaluated = req.params.userId


//   Survey.findMany({ evaluator: evaluator})
//     .then((answeredSurveys) => {
//       answeredSurveys.filter((obj)=>{
//         obj.evaluated === 
//       })


      
//       res.render('survey/survey8')
//     })
//     .catch((err) => console.log(err))
// })
module.exports = router
