const mongoose = require('mongoose')
const user = require('./usersSchema')

const Schema = mongoose.Schema

const surveySchema = new Schema({
  evaluator: userId,
  evaluated: ObjectId,
  social: { type: Number, max: 10 },
  technical: { type: Number, max: 10 },
  organizational: { type: Number, max: 10 },
  leadership: { type: Number, max: 10 },
  motivation: { type: Number, max: 10 },
  review: String },
{ timestamps: true
})

const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
