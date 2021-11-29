const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/home', shopController.getIndex);


module.exports = router;
