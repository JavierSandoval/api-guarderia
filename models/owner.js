const { DataTypes } = require("sequelize");
const sequelize = require('../connect');

const owner = sequelize.define('owners', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullname: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cedula: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    timestamps: false
});

module.exports = owner;