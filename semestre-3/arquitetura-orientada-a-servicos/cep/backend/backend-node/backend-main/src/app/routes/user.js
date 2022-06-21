const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

const baseUrl = '/users';

router.get(baseUrl, userController.getUsers);
router.get(`${baseUrl}/:id`, userController.getUserById);
router.post(baseUrl, userController.insert);
router.patch(baseUrl, userController.update);
router.delete(baseUrl, userController.delete);
