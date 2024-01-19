const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-completes','root','irfan@786',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports = sequelize;