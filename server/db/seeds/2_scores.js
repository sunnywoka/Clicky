export function seed(knex) {
  return knex('scores').insert([
    {
      id: 1,
      player_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      score: 500,
      game_id: 1,
    },
    {
      id: 2,
      player_id: 'auth0|6478f3fd75374ee3d7bc4d84',
      score: 555,
      game_id: 1,
    },
    {
      id: 3,
      player_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      score: 600,
      game_id: 2,
    },
    {
      id: 4,
      player_id: 'auth0|6478f3fd75374ee3d7bc4d84',
      score: 4746,
      game_id: 2,
    },
  ])
}
