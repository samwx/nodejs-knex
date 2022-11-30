const mongoose = require('mongoose');
const connectionString = 'your-connection-string'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}