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

router.get('/product/add', (req, res) => {
    res.render('add-product', {title: 'Agregar Productos'});
});

router.post('/product/add/add', (req, res) => {
   product.addProduct(req, res);
});

router.get('/product/delete/:id', (req, res) => {
    product.deleteProduct(req, res);
});

module.exports = router;

