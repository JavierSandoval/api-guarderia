'use strict'

const pet = require('../models/pet');
const Sequelize = require('sequelize');
const { where } = require('sequelize');
const Op = Sequelize.Op;

var controller = {

    create: (req, res) =>{
        var params = req.body;
        return pet.create({
            name: params.name,
            breed: params.breed,
            birthdate: params.birthdate,
            physical_features: params.physical_features,
            last_deworming: params.last_deworming,
            owner_id: params.owner_id,
            behavior_id: params.behavior_id
        })
        .then(pet => res.status(200).send({ message: 'mascota registrada', pet: pet }))
        .catch(error => res.status(400).send(error));
    },
    list: (_, res) => {
        return pet.findAll({})
           .then(pets => res.status(200).send(pets))
           .catch(error => res.status(400).send(error))
    },
    findById: (req, res) => {
        return pet.findOne({ where: { id: req.params.id } })
           .then(pet => res.status(200).send(pet))
           .catch(error => res.status(400).send(error))
    },
    findByName: (req, res) => {
        return pet.findAll({ 
            where: { 
                name:  {
                    [Op.substring]: req.body.name 
                }
            } 
        })
        .then(pets => res.status(200).send(pets))
        .catch(error => res.status(400).send(error))
    },
    update: (req, res) => {
        var params = req.body;
        return pet.update({
            name: params.name,
            breed: params.breed,
            birthdate: params.birthdate,
            physical_features: params.physical_features,
            last_deworming: params.last_deworming,
            owner_id: params.owner_id,
            behavior_id: params.behavior_id
        },
        {
            where: { id: params.id }
        })
        .then(pet => res.status(200).send({ message: 'mascota actualizada', pet_id: pet }))
        .catch(error => res.status(400).send(error));
    }
};

module.exports = controller;