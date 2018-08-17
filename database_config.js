const Sequelize = require('sequelize');
const DB_USER='passport-test',
      DB_PASS='lkNNanCkCZdiBQ0G'
// DB_USER='root' 
// DB_PASS='root'


const sequelize = new Sequelize(DB_USER, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',//|'sqlite'|'postgres'|'mssql',
  port: 8889,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

module.exports = sequelize;