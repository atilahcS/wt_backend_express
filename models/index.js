"use strict";

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

var db = {};
const sequelize = new Sequelize(config.connection.database, config.connection.username, config.connection.password, {
    host: config.connection.host,
    dialect: 'mysql',
    logging: false,
    // operatorsAliases: false,
    dialectOptions: { },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        paranoid: false
    },
    timezone: '+07:00'
});

fs.readdirSync(__dirname)
.filter(file => {
    return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
})
.forEach(file => {
    var model = sequelize['import'](path.join(__dirname,file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;