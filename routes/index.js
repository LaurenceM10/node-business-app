const express = require('express');
const router = express.Router();

/**
 * This is the site where Express declare the routes of the app
 */

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


module.exports = router;
