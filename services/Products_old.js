const knex = require('knex')
const knexConfigs = require('../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'products'

module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
    },
    insert(product) {
        return db(TABLE_NAME).insert(product);
    },
    delete(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .del();
    },
    update(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .update({
                name: product.name,
                description: product.description,
                price: product.price
            });
    }
}