const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const user = sequelize.define('users', {
    email: {
        type: DataTypes.TEXT,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = user;