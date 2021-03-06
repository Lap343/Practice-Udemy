// Npm imports
const express = require('express');
// Products import
const { 
    getProducts, 
    getCart, 
    getCheckout, 
    getIndex, 
    getOrders,
    getProductDetails,
    postCart
} = require('../controllers/shop');

const router = express.Router();

// GET
router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/products/:productId', getProductDetails);
router.get('/cart', getCart);
router.get('/checkout', getCheckout);
router.get('/orders', getOrders);

// POST
router.post('/cart', postCart)

module.exports = router;