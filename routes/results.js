const express = require('express')
const router = express.Router()
const Surveys = require('../models/surveySchema')

router.get('/display', (req, res, next) => {
  res.render('results', { canvas: true })
})

router.get('/results', (req, res, next) => {
  Surveys.find({ evaluated: req.user.id }, 'social technical organizational leadership motivation round surveyNum')
    .then((data) => { 
      const socialResults = (surveyNum) => {
        let sortBySurveyNumRound = (surveyNum, round) => {
        let bySurvey = data.filter((obj) => obj.surveyNum === surveyNum)
        return bySurvey.filter((obj) => obj.round === round)
        }
        const SocialAverage = (surveyNum, round) => {
                  let allSkillRatings = []
                  let counter = 0
                  sortBySurveyNumRound(surveyNum, round).forEach((obj)=>{
                    allSkillRatings.push(obj.social)
                  })
                  allSkillRatings.forEach((rating) => {
                        counter += rating
                      })
                    return Math.floor(counter / allSkillRatings.length)
        }
        const chartArray = (survey) => {
          const Survey1 = SocialAverage(survey, 1)
          const Survey2 = SocialAverage(survey, 2)
          const Survey3 = SocialAverage(survey, 3)
          const Survey4 = SocialAverage(survey, 4)
      
          return [Survey1, Survey2, Survey3, Survey4]
        }
        return chartArray(surveyNum)
      }
     res.send(socialResults(1))
    })
    .catch((err) => console.log(err))
})

// render charts
// router.get('/results', function (req, res, next) {
// res.render('results')
// })

// create route
// get the data with postman
// normalize data
// res.send

module.exports = router
