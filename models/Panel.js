"use strict";

module.exports = (sequelize, DataTypes) => {
    var Panel = sequelize.define('Panel', {
        comicId: {
            type: DataTypes.INTEGER,
            field: 'comicId'
        },
        source: {
            type: DataTypes.STRING,
            field: 'source'
        },
    }, {
        freezeTableName: true,
        tableName: 'wt_panel'
    });
    return Panel;
}