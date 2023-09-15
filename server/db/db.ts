import connection from './connection.ts'

export async function getPlayersScoresByGameID(
  gameId: number,
  db = connection
) {
  return await db('scores').where('game_id', gameId).select('score')
}

export async function getPlayersScoresByAuth0ID(
  auth0Id: string,
  db = connection
) {
  return await db('scores').where('auth0_id', auth0Id).select('score')
}
