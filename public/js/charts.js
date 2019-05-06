
// const express = require('express')
// const router = express.Router()
// const Surveys = require('../models/surveySchema')
// const User = require('../models/usersSchema')

const baseURL = 'http://localhost:3007'
const canvas = document.querySelector('canvas')

window.addEventListener('load', () => {
  printSocialChart()
})
// get array of results by skill, for the charts

// const printSocialChart = (surveyApi, surveyNum) => {
  
function printSocialChart () {

  axios.get(`${baseURL}/results`)
  .then((response) => {
   console.log(response)
  })
  const social = document.getElementById('socialChart').getContext('2d')
    var socialChart = new Chart(social, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4],
        datasets: [{
          label: "SOCIAL",
          data: [13, 24, 35, 12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
// surveyApi.get(`/results`)
//   .then((response) => printSocialChart(response.data, 1))
//   .catch((error) => console.log(error))

// render charts
// router.get('/results', function (req, res, next) {
  // res.render('results')
  // })
  
  // create route
  // get the data with postman
  // normalize data
  // res
