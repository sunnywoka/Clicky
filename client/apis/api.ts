import request from 'superagent'

const rootUrl = '/api/v1'

export async function getRecords() {
  const res = await request.get(`${rootUrl}/scores`)
  return res.body
}

export async function getRecordsByGameId() {
  const res = await request.get(`${rootUrl}/scores/gameId`)
  return res.body
}

export async function getRecordsByAuth0Id(token: string) {
  const res = await request
    .get(`${rootUrl}/scores/players`)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}

export async function addNewRecord(
  token: string,
  nickname: string,
  score: number,
  gameId: number
) {
  await request
    .post(`${rootUrl}/scores`)
    .set('Authorization', `Bearer ${token}`)
    .send({ nickname: nickname, score: score, gameId: gameId })
}
