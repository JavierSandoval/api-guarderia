'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
var secret = 'miclavedetoken';

var service = {
    createToken: (user) => {
        const payload = {
            sub: user.email,
            iat: moment().unix(),
            exp: moment().add(14, 'days').unix(),
        }
    
        return jwt.encode(payload, secret);
    },
    decodeToken: (token) => {

        const decoded = new Promise((resolve, reject) => {
            try {
                const payload = jwt.decode(token, secret);

                if(payload.exp <= moment().unix()){
                    reject({
                        status: 401,
                        message: 'el token ha expirado'
                    })
                }
                resolve(payload.sub);
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Invalid Token'
                })
            }
        })
        return decoded;
    }
}

module.exports = service;