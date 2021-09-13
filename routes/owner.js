'use strict'

var express = require('express');
var ownerController = require('../controllers/owner');
var auth = require('../middlewares/auth');

var router = express.Router();

router.post('/create', auth.isAuth, ownerController.create);
router.get('/list',auth.isAuth, ownerController.list);
router.get('/findByEmail/:email', auth.isAuth, ownerController.findByEmail);
router.post('/findByName', auth.isAuth, ownerController.findByName);
router.put('/update', auth.isAuth, ownerController.update);
router.get('/private', auth.isAuth, (req,res) =>{
    res.status(200).send({ message: 'Tienes acceso'});
})


module.exports = router;