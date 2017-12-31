const express = require('express');
const router = express.Router();

//Require the product controller
const Product = require('../controllers/product');


/**
 * This is the site where Express declare the routes of the app
 */

/* GET product page. */
router.get('/product', (req, res) => {
    Product.getProducts(req, res);
});

router.get('/product/add', (req, res) => {
    res.render('add-product', {title: 'Agregar Productos'});
});

router.post('/product/add/add', (req, res) => {
   Product.addProduct(req, res);
});

router.delete('product/delete', (req, res) => {
   Product.deleteProduct(req, res);
});

module.exports = router;

