const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const user_routes = require('./routes/user');
const owner_routes = require('./routes/owner');
const pets_routes = require('./routes/pet');
const vaccine_routes = require('./routes/pet_vaccine');


const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Enable cors to app
app.use(cors());

//Add prefix to routes
app.use('/api/user', user_routes);
app.use('/api/owner',owner_routes);
app.use('/api/pet', pets_routes);
app.use('/api/vaccine', vaccine_routes);


module.exports = app;