export function up(knex) {
  return knex.schema.createTable('scores', (table) => {
    table.increments('id').primary()
    table.string('player_id').references('players.auth0_id').notNullable()
    table.integer('score')
    table.integer('game_id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('scores')
}
