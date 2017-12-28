const express = require('express');
const router = express.Router();

/**
 * This is the site where Express declare the routes of the app
 */

/* GET product page. */
router.get('/product', function (req, res, next) {
    res.render('product', {title: 'Productos'});
});


module.exports = router;

