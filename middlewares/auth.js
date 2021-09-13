'use strict'

const serviceToken = require('../services/token');

var authorization ={
    isAuth: (req, res, next) => {

        if(!req.headers.authorization){
            return res.status(403).send({ message: 'No tienes autorizacion para acceder a este recurso'});
        }

        const token = req.headers.authorization.split(" ")[1];
        
        serviceToken.decodeToken(token)
            .then(response => {
                req.user = response;
                next();
            })
            .catch(response => {
                res.status(response.status)
            })
    }
}

module.exports = authorization;