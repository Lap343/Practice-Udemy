const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    })
}

exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/')
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if(!product){
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        })
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title
    const imgUrl = req.body.imgUrl
    const description = req.body.description
    const price = req.body.price

    const product = new Product(title, imgUrl, description, price);
    product.save();
    res.redirect('/');
}

exports.getViewProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        })
    })
}