"use strict";

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var eng = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

var db = {};
const sequeliz = new Sequelize(config.connection.database, config.connection.username, confiog.connection.password, {
    host: config.connection.host,
    dialect: 'mysql',
    loggin: false,
    operatorsAliases: false,
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
    console.log('fs filter');
    return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
})
.forEach(file => {
    console.log('fs foreach');
    var model = sequeliz['import'](path.join(__dirname,file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})