
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function (table) {
    table.increments()
    table.string('title')
    table.integer('year')
    table.integer('director_id')
      .references('id')
      .inTable('director')
      .onDelete('CASCADE')
});
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movie')
};
