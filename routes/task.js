const express = require('express');
const router = express.Router();

/**
 * In the directory 'routes' is the site where Express declare the routes of the app
 */

/* GET task page . */
router.get('/', (req, res, next) => {
    res.render('task', {title: 'Task of WorkTime'});
});


/**
 * TODO: in this file i can declare subroutes, like example
 *
 * localhost:3000/tasks/detail
 *
 * router.get('/detail', (req, res, next) => {
    res.render('task', {title: 'Task of WorkTime'});
});
 */



module.exports = router;