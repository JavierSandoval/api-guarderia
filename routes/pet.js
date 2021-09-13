'use strict'

var express = require('express');
var petController = require('../controllers/pet');
var auth = require('../middlewares/auth');

var router = express.Router();

router.post('/create', auth.isAuth, petController.create);
router.get('/list', auth.isAuth, petController.list);
router.get('/findById/:id', auth.isAuth, petController.findById);
router.post('/findByName', auth.isAuth, petController.findByName);
router.put('/update', auth.isAuth, petController.update);
router.get('/private', auth.isAuth, (req,res) =>{
    res.status(200).send({ message: 'Tienes acceso'});
})


module.exports = router;