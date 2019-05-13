const knex = require('knex')
const knexConfigs = require('../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'products'

module.exports = {
    listAll() {
        console.log('Retrieving products');
        return db(TABLE_NAME).select('*')
    }
}