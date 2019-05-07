
const express = require('express')
const router = express.Router()
const Surveys = require('../models/surveySchema')
const currentUser = '5ccc67e9f4197e531b218766' // Jon user id, this should take the loged in user instead.

// get array of results by skill, for the charts
const getSocialResults = (survey) => {
  const SocialAverage = (survey, round) => {
    Surveys.findMany({ Evaluated: currentUser, surveyNum: survey, round: round })
      .then((objects) => {
        let allSkillRatings = []
        let counter = 0
        objects.forEach((obj) => {
          allSkillRatings.push(obj.social)
        })
        allSkillRatings.forEach((rating) => {
          counter += rating
        })
        return Math.floor(counter / allSkillRatings.length)
      })
      .catch((err) => console.log(err))
  }
  const Survey1 = SocialAverage(survey, 1)
  const Survey2 = SocialAverage(survey, 2)
  const Survey3 = SocialAverage(survey, 3)
  const Survey4 = SocialAverage(survey, 4)

  return [Survey1, Survey2, Survey3, Survey4]
}

// render charts
router.get('/results', function (req, res, next) {
  res.render('results')
  const { id } = req.params
  console.log(req.params)
  
})

module.exports = router
