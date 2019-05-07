const mongoose = require('mongoose')
const user = require('./usersSchema')

const Schema = mongoose.Schema

const surveySchema = new Schema({
  evaluator: mongoose.Schema.Types.ObjectId,
  evaluated: mongoose.Schema.Types.ObjectId,
  social: { type: Number, max: 10 },
  technical: { type: Number, max: 10 },
  organizational: { type: Number, max: 10 },
  leadership: { type: Number, max: 10 },
  motivation: { type: Number, max: 10 },
  review: String,
  round: { type: Number, max: 4 },
  surveyNum: Number
})

const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
