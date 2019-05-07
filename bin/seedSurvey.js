const mongoose = require('mongoose')
const Survey = require('../models/surveySchema')
const config = require('./../config/config')

mongoose.connect(config.DB_URL)

// just for testing the charts, i have created this collection with
// always the same evaluator, john(since the schema asks for an id),
// and the evaluated, the user Jon, save for the last survey which the evaluated is soemone else
// to check if the function in charts works properly. The idea is to populate the
// user in the charts function with the one currently loged in once this works.

const surveyList = [
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 1,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 1,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 3,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 1,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 2,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 1,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 3,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 2,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 5,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 2,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 6,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 2,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 7,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 3,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 6,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 3,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 8,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 3,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 10,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 4,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 8,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 4,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218766', // Jon
    social: 9,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 4,
    surveyNum: 1,
    timestamps: true
  },
  { evaluator: '5ccc670851623152f23e5df1', // john
    evaluated: '5ccc67e9f4197e531b218769', // other user, to check if it is also included
    social: -5,
    technical: 2,
    organizational: 3,
    leadership: 6,
    motivation: 2,
    review: 'fsafjsajkhfskadjksahfdhsafhdksjafdshajfdsadsa',
    round: 1,
    surveyNum: 1,
    timestamps: true
  }
]

Survey.create(surveyList, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${surveyList.length} surveys`)
  mongoose.connection.close()
})
