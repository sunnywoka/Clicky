export async function seed(knex) {
  await knex('scores').del()
  await knex('players').del()
}
