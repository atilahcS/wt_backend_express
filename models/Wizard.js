"use strict";

module.exports = (sequelize, DataTypes) => {
    var Wizard = sequelize.define('Wizard', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        }
    }, {
        freezeTableName: true,
        tableName: 'wizard'
    });
    return Wizard
}