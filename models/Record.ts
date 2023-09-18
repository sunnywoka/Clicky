export interface Record {
  score: number
  gameId: number
}

export interface newRecord extends Record {
  auth0Id: string
}
