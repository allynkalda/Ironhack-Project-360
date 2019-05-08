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
        const Average = (surveyNum, round) => {
          let allSkillRatings = []
          let counter = 0
          sortBySurveyNumRound(surveyNum, round).forEach((obj) => {
            allSkillRatings.push(obj.social)
          })
          allSkillRatings.forEach((rating) => {
            counter += rating
          })
          return Math.floor(counter / allSkillRatings.length)
        }
        const chartArray = (survey) => {
          const Survey1 = Average(survey, 1)
          const Survey2 = Average(survey, 2)
          const Survey3 = Average(survey, 3)
          const Survey4 = Average(survey, 4)

          return [Survey1, Survey2, Survey3, Survey4]
        }
        return chartArray(surveyNum)
      }
      const techResults = (surveyNum) => {
        let sortBySurveyNumRound = (surveyNum, round) => {
          let bySurvey = data.filter((obj) => obj.surveyNum === surveyNum)
          return bySurvey.filter((obj) => obj.round === round)
        }
        const Average = (surveyNum, round) => {
          let allSkillRatings = []
          let counter = 0
          sortBySurveyNumRound(surveyNum, round).forEach((obj) => {
            allSkillRatings.push(obj.technical)
          })
          allSkillRatings.forEach((rating) => {
            counter += rating
          })
          return Math.floor(counter / allSkillRatings.length)
        }
        const chartArray = (survey) => {
          const Survey1 = Average(survey, 1)
          const Survey2 = Average(survey, 2)
          const Survey3 = Average(survey, 3)
          const Survey4 = Average(survey, 4)

          return [Survey1, Survey2, Survey3, Survey4]
        }
        return chartArray(surveyNum)
      }
      const organResults = (surveyNum) => {
        let sortBySurveyNumRound = (surveyNum, round) => {
          let bySurvey = data.filter((obj) => obj.surveyNum === surveyNum)
          return bySurvey.filter((obj) => obj.round === round)
        }
        const Average = (surveyNum, round) => {
          let allSkillRatings = []
          let counter = 0
          sortBySurveyNumRound(surveyNum, round).forEach((obj) => {
            allSkillRatings.push(obj.organizational)
          })
          allSkillRatings.forEach((rating) => {
            counter += rating
          })
          return Math.floor(counter / allSkillRatings.length)
        }
        const chartArray = (survey) => {
          const Survey1 = Average(survey, 1)
          const Survey2 = Average(survey, 2)
          const Survey3 = Average(survey, 3)
          const Survey4 = Average(survey, 4)

          return [Survey1, Survey2, Survey3, Survey4]
        }
        return chartArray(surveyNum)
      }
      const leaderResults = (surveyNum) => {
        let sortBySurveyNumRound = (surveyNum, round) => {
          let bySurvey = data.filter((obj) => obj.surveyNum === surveyNum)
          return bySurvey.filter((obj) => obj.round === round)
        }
        const Average = (surveyNum, round) => {
          let allSkillRatings = []
          let counter = 0
          sortBySurveyNumRound(surveyNum, round).forEach((obj) => {
            allSkillRatings.push(obj.leadership)
          })
          allSkillRatings.forEach((rating) => {
            counter += rating
          })
          return Math.floor(counter / allSkillRatings.length)
        }
        const chartArray = (survey) => {
          const Survey1 = Average(survey, 1)
          const Survey2 = Average(survey, 2)
          const Survey3 = Average(survey, 3)
          const Survey4 = Average(survey, 4)

          return [Survey1, Survey2, Survey3, Survey4]
        }
        return chartArray(surveyNum)
      }
      const motivationResults = (surveyNum) => {
        let sortBySurveyNumRound = (surveyNum, round) => {
          let bySurvey = data.filter((obj) => obj.surveyNum === surveyNum)
          return bySurvey.filter((obj) => obj.round === round)
        }
        const Average = (surveyNum, round) => {
          let allSkillRatings = []
          let counter = 0
          sortBySurveyNumRound(surveyNum, round).forEach((obj) => {
            allSkillRatings.push(obj.motivation)
          })
          allSkillRatings.forEach((rating) => {
            counter += rating
          })
          return Math.floor(counter / allSkillRatings.length)
        }
        const chartArray = (survey) => {
          const Survey1 = Average(survey, 1)
          const Survey2 = Average(survey, 2)
          const Survey3 = Average(survey, 3)
          const Survey4 = Average(survey, 4)

          return [Survey1, Survey2, Survey3, Survey4]
        }
        return chartArray(surveyNum)
      }
      const reviews = (surveyNum) => {
        const reviews = []
        let sortBySurveyNum = (surveyNum, round) => {
          let bySurvey = data.filter((obj) => obj.surveyNum === surveyNum)
          return bySurvey
        }
        sortBySurveyNum(surveyNum).forEach((Obj) => {
          reviews.push(Obj.review)
        })
        return reviews
      }
      const chartsData = [socialResults(1), techResults(1), organResults(1), leaderResults(1), motivationResults(1), reviews(1)]
      //console.log(chartsData)
      res.send(chartsData)
    })
    .catch((err) => console.log(err))
})

router.get('/reviews', (req, res, next) => {
  console.log(req.user.id)
  Surveys.find({ evaluated: req.user.id })
    .then((data) => // console.log(data))
      res.render('reviews', { data }))
    .catch((err) => console.log(err))
})

module.exports = router
