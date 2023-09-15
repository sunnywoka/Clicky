export function up(knex) {
  return knex.schema.createTable('scores', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.integer('score')
    table.integer('game_id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('scores')
}
