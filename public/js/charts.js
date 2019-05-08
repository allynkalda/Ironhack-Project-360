
const baseURL = 'http://localhost:3007'
const canvas = document.querySelector('canvas')


window.addEventListener('load', () => {
  printCharts()
})
function printCharts () {
  axios.get(`${baseURL}/results`)
  .then((response) => {
    
    const social = document.getElementById('socialChart').getContext('2d')
    const tech = document.getElementById('technicalChart').getContext('2d')
    const organ = document.getElementById('organizationalChart').getContext('2d')
    const leader = document.getElementById('leadershipChart').getContext('2d')
    const moti = document.getElementById('motivationChart').getContext('2d')

      var socialChart = new Chart(social, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4],
          datasets: [{
            label: 'SOCIAL',
            data: response.data[0],
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
          responsive: false,
          maintainAspectRatio: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                suggestedMax:5

              }
            }]
          }
        }
      })
      var techChart = new Chart(tech, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4],
          datasets: [{
            label: 'Technical',
            data: response.data[1],
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
          responsive: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                suggestedMax:5
              }
            }]
          }
        }
      })
      var organChart = new Chart(organ, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4],
          datasets: [{
            label: 'ORGANIZATION',
            data: response.data[2],
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
          responsive: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                suggestedMax:5
              }
            }]
          }
        }
      })
      var leadChart = new Chart(leader, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4],
          datasets: [{
            label: 'LEADERSHIP',
            data: response.data[3],
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
          responsive: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                suggestedMax:5
              }
            }]
          }
        }
      })
      var organChart = new Chart(moti, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4],
          datasets: [{
            label: 'MOTIVATION',
            data: response.data[4],
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
          responsive: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                suggestedMax:5
              }
            }]
          }
        }
      })
    })
}
