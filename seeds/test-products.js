
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { id: 1, name: 'iPhone X', description: 'Amazing cellphone', price: 999.00 },
        { id: 2, name: 'Smartwatch', description: 'Amazing smartwatch', price: 349.00 }
      ]);
    });
};
