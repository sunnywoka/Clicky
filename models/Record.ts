export interface Record {
  nickname: string
  score: number
  gameId: number
}

export interface newRecord extends Record {
  auth0Id: string
}
