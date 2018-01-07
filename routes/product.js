const express = require('express');
const router = express.Router();

//Require the product controller
const product = require('../controllers/product');


/**
 * This is the site where Express declare the routes of the app
 */

/* GET product page. */
router.get('/product', (req, res) => {
    product.getProducts(req, res);
});

//Route to get all the products
router.get('/product/add', (req, res) => {
    res.render('add-product', {title: 'Agregar Productos'});
});

//Route to add a product
router.post('/product/add/add', (req, res) => {
   product.addProduct(req, res);
});

//Route to eliminate a product
router.get('/product/delete/:id', (req, res) => {
    product.deleteProduct(req, res);
});

//Route to eliminate a product
router.post('/product/edit/:id', (req, res) => {
   product.updateProduct(req, res);
});

module.exports = router;




