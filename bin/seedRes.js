const mongoose = require('mongoose')
const Survey = require('../models/surveySchema')

mongoose.connect(`mongodb://localhost/360-project`)

const survey = [
  {
    evaluator: '5ccec190f1df165714b221e7',
    evaluated: '5ccc6a973bc9872d4a750d84',
    social: 4,
    technical: 3,
    organizational: 2,
    leadership: 4,
    motivation: 5,
    review: 'Very good job.',
    round: 0,
    surveyNum: 1
  }
]

Survey.create(survey, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${survey.length} survey object`)
  mongoose.connection.close()
})
