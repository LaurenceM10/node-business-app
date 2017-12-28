const express = require('express');
const router = express.Router();

/**
 * This is the site where Express declare the routes of the app
 */

/* GET product page. */
router.get('/product', (req, res, next) => {
    res.render('product', {title: 'Productos'});
});


/* To update a product */
router.put('/product/:id', (req, res, next) => {

});


module.exports = router;

