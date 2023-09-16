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

test('1. List all score by game ID', async () => {
  const scores = await dbFunction.getPlayersScoresByGameID(1)
  expect(scores).toHaveLength(2)
  expect(scores[0]).toHaveProperty('score')
})

test('2. List all score by auth0 ID', async () => {
  const scores = await dbFunction.getPlayersScoresByAuth0ID(
    'auth0|6478f3fd75374ee3d7bc4d94'
  )
  expect(scores).toHaveLength(2)
  expect(scores[0]).toHaveProperty('score')
})

test('3. Add a new record to database and the database should have one extra record', async () => {
  const testRecord = {
    auth0Id: 'auth0|6478f3fd75374ee3d7bc4d94',
    score: 966,
    gameId: 1,
  }

  const quantityBefore = await dbFunction.getAllScores()
  await dbFunction.addNewScore(testRecord)
  const quantityAfter = await dbFunction.getAllScores()
  const difference = quantityAfter.length - quantityBefore.length
  expect(difference).toBe(1)
})

test('3. Add a new record to database and the database can get two scores for game ID 2', async () => {
  const testRecord = {
    auth0Id: 'auth0|6478f3fd75374ee3d7bc4d94',
    score: 966,
    gameId: 2,
  }

  await dbFunction.addNewScore(testRecord)
  const gameId2Scores = await dbFunction.getPlayersScoresByGameID(2)
  expect(gameId2Scores).toStrictEqual([
    {
      score: 600,
    },
    {
      score: 966,
    },
  ])
})

test('3. Add a new record to database and the database can get three scores for same Auth0 ID', async () => {
  const testRecord = {
    auth0Id: 'auth0|6478f3fd75374ee3d7bc4d94',
    score: 966,
    gameId: 2,
  }

  await dbFunction.addNewScore(testRecord)
  const gameAuth0Scores = await dbFunction.getPlayersScoresByAuth0ID(
    'auth0|6478f3fd75374ee3d7bc4d94'
  )
  expect(gameAuth0Scores).toStrictEqual([
    {
      score: 500,
    },
    {
      score: 600,
    },
    {
      score: 966,
    },
  ])
})
