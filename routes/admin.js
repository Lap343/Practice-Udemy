// Npm imports
const express = require('express');
// Controller imports
const { 
    getAddProduct, 
    postAddProduct, 
    getViewProducts 
} = require('../controllers/admin');

const router = express.Router();

// GET
router.get('/add-product', getAddProduct);
router.get('/products', getViewProducts);
// POST
router.post('/add-product', postAddProduct);

module.exports = router;