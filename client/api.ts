import request from 'superagent'
import { newRecord } from '../models/Record'

const rootUrl = '/api/v1'

export async function getRecords() {
  return Promise.resolve([
    {
      nickname: 'DestroyOrbison',
      score: 500,
    },
    {
      nickname: 'DestroyOrbison',
      score: 300,
    },
    {
      nickname: 'DestroyOrbison',
      score: 2000,
    },
  ])
}

//.catch(logError)

function logError(err: Error) {
  if (err.message === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error('Only the registered player can add the records.')
  } else {
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
