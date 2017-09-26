
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function (table) {
    table.increments()
    table.integer('year').notNullable()
    table.integer('director_id')
});
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movie')
};
