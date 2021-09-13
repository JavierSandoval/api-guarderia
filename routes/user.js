'use strict'

var express = require('express');
var userController = require('../controllers/user');
var auth = require('../middlewares/auth');

var router = express.Router();

router.post('/create', userController.create);
router.get('/list', auth.isAuth, userController.list);
router.get('/find/:email', auth.isAuth, userController.find);
router.put('/updateEmail', auth.isAuth, userController.updateEmail);
router.post('/signIn', userController.signIn);
router.get('/private', auth.isAuth, (req,res) =>{
    res.status(200).send({ message: 'Tienes acceso'});
})


module.exports = router;