"use strict";

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            field: 'username'
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        }
    }, {
        freezeTableName: true,
        tableName: 'wt_user'
    });
    return User;
}