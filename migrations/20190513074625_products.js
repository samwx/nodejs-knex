
exports.up = function(knex) {
  return knex.schema.createTable('products', column => {
    column.increments('id').primary()
    column.string('name')
    column.string('description')
    column.decimal('price')
    column.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products')
};
