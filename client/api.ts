// import request from 'superagent'
// import { newRecord } from '../models/Record'

// const rootUrl = '/api/v1'

export async function getRecords() {
  return Promise.resolve([
    {
      nickname: 'Mr.Hum',
      score: 500,
      mode: 'Normal',
    },
    {
      nickname: 'Mr.Hum',
      score: 300,
      mode: 'Bounce',
    },
    {
      nickname: 'Mr.Hum',
      score: 2000,
      mode: 'Normal',
    },
    {
      nickname: 'CCCoBBB',
      score: 353,
      mode: 'Normal',
    },
    {
      nickname: 'CCCoBBB',
      score: 300,
      mode: 'Bounce',
    },
    {
      nickname: 'TYL',
      score: 2000,
      mode: 'Bounce',
    },
    {
      nickname: 'TYL',
      score: 35356,
      mode: 'Normal',
    },
  ])
}

//.catch(logError)

// function logError(err: Error) {
//   if (err.message === 'Username Taken') {
//     throw new Error('Username already taken - please choose another')
//   } else if (err.message === 'Forbidden') {
//     throw new Error('Only the registered player can add the records.')
//   } else {
//     console.error('Error consuming the API (in client/api.js):', err.message)
//     throw err
//   }
// }
