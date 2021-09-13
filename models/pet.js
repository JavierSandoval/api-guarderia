const { DataTypes } = require("sequelize");
const sequelize = require('../connect');

const pet = sequelize.define('pets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    breed: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    birthdate: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    physical_features: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    last_deworming: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    behavior_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = pet;