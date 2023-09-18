import connection from './connection.ts'
import { newRecord } from '../../models/Record.ts'

export async function getPlayersScoresByGameID(
  gameId: number,
  db = connection
) {
  return await db('scores').where('game_id', gameId).select('nickname', 'score')
}

export async function getPlayersScoresByAuth0ID(
  auth0Id: string,
  db = connection
) {
  return await db('scores')
    .where('auth0_id', auth0Id)
    .select('nickname', 'score')
}

export async function addNewScore(record: newRecord, db = connection) {
  return await db('scores').insert({
    auth0_id: record.auth0Id,
    nickname: record.nickname,
    score: record.score,
    game_id: record.gameId,
  })
}

export async function getAllScores(db = connection) {
  return await db('scores').select(
    'nickname',
    'score',
    'auth0_id as auth0Id',
    'game_id as gameId'
  )
}
