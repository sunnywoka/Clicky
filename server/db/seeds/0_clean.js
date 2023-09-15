export function seed(knex) {
  return knex('scores').del()
}
