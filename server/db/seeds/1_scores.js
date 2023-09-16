export function seed(knex) {
  return knex('scores').insert([
    {
      id: 1,
      auth0_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      nickname: 'Mr.Hum',
      score: 500,
      game_id: 1,
    },
    {
      id: 2,
      auth0_id: 'auth0|6478f3fd75374ee3d7bc4d84',
      nickname: 'CCCoBBB',
      score: 555,
      game_id: 1,
    },
    {
      id: 3,
      auth0_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      nickname: 'Mr.Hum',
      score: 600,
      game_id: 2,
    },
  ])
}
