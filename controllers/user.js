'use strict'

const user = require('../models/user');
const serviceToken = require('../services/token');
const bcrypt = require('bcrypt');

var controller = {

    create: (req, res) =>{
        var params = req.body;
        return bcrypt.hash(params.password,10).then((pass) => {
            user
            .create ({
                email: params.email,
                password: pass
            })
            .then(user => res.status(200).send({ token: serviceToken.createToken(user) }))
            .catch(error => res.status(400).send(error))
        });
    },
    list: (_, res) => {
        return user.findAll({})
           .then(user => res.status(200).send(user))
           .catch(error => res.status(400).send(error))
    },
    find: (req, res) => {
        return user.findOne({ where: { email: req.params.email } })
           .then(user => res.status(200).send(user))
           .catch(error => res.status(400).send(error))
    },
    updateEmail: (req, res) => {
        var params = req.body;
        return user.update({
            email: params.new_email
        },
        {
            where: { email: params.email }
        })
        .then(user => res.status(200).send({ message: 'email actualizado' }))
        .catch(error => res.status(400).send(error));
    },  
    signIn: (req, res) => {
        return user.findOne({ where: { email: req.body.email } })
            .then(user => {
                let passHash = user.getDataValue('password');
                bcrypt.compare(req.body.password,passHash).then((hashOk) => {
                    if(hashOk) {
                        res.status(200).send({ token: serviceToken.createToken(user) });
                    } else {
                        res.status(200).send({ message: 'la contraseña es incorrecta' });
                    }
                })
            })
            .catch(error => res.status(400).send({ message: 'El email no se encuentra registrado' }));
    }
};

module.exports = controller;