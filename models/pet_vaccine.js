const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const pet_vaccine = sequelize.define('pet_vaccines', {
    pet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    vaccine_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    date_applied: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = pet_vaccine;