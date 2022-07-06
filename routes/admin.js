// Npm imports
const express = require('express');
// Controller imports
const { 
    getAddProduct, 
    postAddProduct, 
    getViewProducts, 
    getEditProduct
} = require('../controllers/admin');

const router = express.Router();

// GET
router.get('/add-product', getAddProduct);
router.get('/products', getViewProducts);
router.get('/edit-product/:productId', getEditProduct);
// POST
router.post('/add-product', postAddProduct);

module.exports = router;