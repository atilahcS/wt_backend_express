"use strict";

module.exports = (sequelize, DataTypes) => {
    var Comic = sequelize.define('Comic', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        description: {
            type: DataTypes.TEXT,
            field: 'description'
        },
        genre: {
            type: DataTypes.STRING,
            field: 'genre'
        },
        authorId: {
            type: DataTypes.INTEGER,
            field: 'authorId'
        },
        authorName: {
            type: DataTypes.STRING,
            field: 'authorName'
        }
    }, {
        freezeTableName: true,
        tableName: 'wt_comic'
    });
    return Comic;
}