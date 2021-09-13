'use strict'

const owner = require('../models/owner');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

var controller = {

    create: (req, res) =>{
        var params = req.body;
        return owner.create({
            fullname: params.fullname,
            email: params.email,
            address: params.address,
            phone: params.phone,
            cedula: params.cedula
        })
        .then(owner => res.status(200).send({ message: 'propietario registrado', owner: owner }))
        .catch(error => res.status(400).send(error));
    },
    list: (_, res) => {
        return owner.findAll({})
           .then(owner => res.status(200).send(owner))
           .catch(error => res.status(400).send(error))
    },
    findByEmail: (req, res) => {
        return owner.findOne({ where: { email: req.params.email } })
           .then(owner => res.status(200).send(owner))
           .catch(error => res.status(400).send(error))
    },
    findByName: (req, res) => {
        return owner.findAll({ 
            where: { 
                fullname: {
                    [Op.substring]: req.body.fullname 
                }
            } 
        })
        .then(owner => res.status(200).send(owner))
        .catch(error => res.status(400).send(error))
    },
    update: (req, res) => {
        var params = req.body;
        return owner.update({
            fullname: params.fullname,
            email: params.email,
            address: params.address,
            phone: params.phone,
            cedula: params.cedula
        },
        {
            where: { id: params.id }
        })
        .then(owner => res.status(200).send({ message: 'propietario actualizado', owner_id: owner }))
        .catch(error => res.status(400).send(error));
    }

};

module.exports = controller;