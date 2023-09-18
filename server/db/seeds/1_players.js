export function seed(knex) {
  return knex('players').insert([
    {
      auth0_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      nickname: 'Mr.Hum',
    },
    {
      auth0_id: 'auth0|6478f3fd75374ee3d7bc4d84',
      nickname: 'CCCoBBB',
    },
  ])
}
