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

export async function getRecordsBynickname() {
  const res = await request.get(`${rootUrl}/scores/nickname`)
  return res.body
}

export async function addNewRecord(
  token: string,
  score: number,
  gameId: number
) {
  await request
    .post(`${rootUrl}/scores/newscore`)
    .set('Authorization', `Bearer ${token}`)
    .send({ score: score, gameId: gameId })
}

export async function addNewPlayer(token: string, nickname: string) {
  await request
    .post(`${rootUrl}/players/newplayer`)
    .set('Authorization', `Bearer ${token}`)
    .send({ nickname: nickname })
}

export async function getPlayer(token: string) {
  const res = await request
    .get(`${rootUrl}/players`)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}
