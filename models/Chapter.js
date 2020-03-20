"use strict";

module.exports = (sequelize, DataTypes) => {
    var Comic = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        comicId: {
            type: DataTypes.INTEGER,
            field: 'comicId'
        }
    }, {
        freezeTableName: true,
        tableName: 'wt_chapter'
    });
    return Comic;
}