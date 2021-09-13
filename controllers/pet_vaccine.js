'use strict'

const pet_vaccine = require('../models/pet_vaccine');

var controller = {

    create: (req, res) =>{
        var params = req.body;
        return pet_vaccine.create({
            pet_id: params.pet_id,
            vaccine_id: params.vaccine_id,
            date_applied: params.date_applied
        })
        .then(vaccine => res.status(200).send({ message: 'vacuna registrada', vaccine: vaccine }))
        .catch(error => res.status(400).send(error));
    }
};

module.exports = controller;