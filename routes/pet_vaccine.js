'use strict'

var express = require('express');
var vaccineController = require('../controllers/pet_vaccine');
var auth = require('../middlewares/auth');

var router = express.Router();

router.post('/create', auth.isAuth, vaccineController.create);


module.exports = router;