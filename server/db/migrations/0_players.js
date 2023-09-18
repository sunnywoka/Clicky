export function up(knex) {
  return knex.schema.createTable('players', (table) => {
    table.string('auth0_id').primary()
    table.string('nickname')
  })
}

export function down(knex) {
  return knex.schema.dropTable('players')
}
