const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/home', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/product/:id', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/add-to-cart/:id', shopController.getAddToCart);

router.get('/remove-from-cart/:id', shopController.getRemoveFromCart);

module.exports = router;
