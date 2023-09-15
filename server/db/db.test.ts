import { expect, test, beforeAll, beforeEach } from 'vitest'
// import knex from 'knex'
// import knexfile from './knexfile.js'
import * as dbFunction from './db.ts'
import db from './connection'
// const db = knex(knexfile.test)

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

test('1. List all score by game ID ', async () => {
  const scores = await dbFunction.getPlayersScoresByGameID(1)
  expect(scores).toHaveLength(2)
  expect(scores[0]).toHaveProperty('score')
})

test('2. List all score by auth0 ID ', async () => {
  const scores = await dbFunction.getPlayersScoresByAuth0ID(
    'auth0|6478f3fd75374ee3d7bc4d94'
  )
  expect(scores).toHaveLength(2)
  expect(scores[0]).toHaveProperty('score')
})
