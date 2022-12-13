const Sequelize = require('sequelize');
require('dotenv').config('../.env');

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        'betcamp_db',
        'root',
        'Pushpa24$$',
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}
module.exports = sequelize;