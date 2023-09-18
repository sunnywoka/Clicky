import connection from './connection.ts'
import { newRecord } from '../../models/Record.ts'
import { newPlayer } from '../../models/Player.ts'

export async function getPlayersScoresByGameID(
  gameId: number,
  db = connection
) {
  return await db('scores')
    .join('players', 'scores.player_id', 'players.auth0_id')
    .where('game_id', gameId)
    .select('players.nickname', 'score')
}

export async function getPlayersScoresByAuth0ID(
  auth0Id: string,
  db = connection
) {
  return await db('scores')
    .join('players', 'scores.player_id', 'players.auth0_id')
    .where('player_id', auth0Id)
    .select('players.nickname', 'score')
}

export async function addNewScore(record: newRecord, db = connection) {
  return await db('scores').insert({
    player_id: record.auth0Id,
    score: record.score,
    game_id: record.gameId,
  })
}

export async function getAllScores(db = connection) {
  return await db('scores')
    .join('players', 'scores.player_id', 'players.auth0_id')
    .select(
      'players.nickname',
      'score',
      'players.auth0_id as auth0Id',
      'game_id as gameId'
    )
}
export async function addNewPlayer(newPlayer: newPlayer, db = connection) {
  return await db('players').insert({
    auth0_id: newPlayer.auth0Id,
    nickname: newPlayer.nickname,
  })
}
