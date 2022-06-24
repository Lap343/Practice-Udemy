// Npm imports
const express = require('express');
// Products import
const { getProducts, getCart, getCheckout, getIndex } = require('../controllers/shop');

const router = express.Router();

// GET
router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/cart', getCart);
router.get('/checkout', getCheckout);

module.exports = router;