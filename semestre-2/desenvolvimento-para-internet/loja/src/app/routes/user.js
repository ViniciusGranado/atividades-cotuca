const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/sign-up', userController.getSignUp);

router.post('/sign-up', userController.postSignUp);

router.post('/login', userController.postLogin);

router.get('/logout', userController.getLogout);

module.exports = router;
