const express = require('express');
const router = express.Router();

//Require the purchase controller
const purchase = require('../controllers/purchase');

/**
 * Route to add a purchase
 */
router.post('/purchase', (req, res) => {
    purchase.addPurchase(req, res);
});

/**
 * Route to get all the purchases
 */
router.get('/purchase', (req, res) => {
    purchase.getPurchases(req, res);
});

/**
 * Route to get a purchase by id
 */
router.get('/purchase/:id', (req, res) => {
    purchase.getPurchase(req, res);
});

/**
 * Route to update a purchase by id
 */
router.post('/purchase/update/:id', (req, res) => {
    purchase.updatePurchase(req, res);
});

/**
 * Route to delete a purchase by id
 */
router.get('/purchase/delete/:id', (req, res) => {
    purchase.deletePurchase(req, res);
});


module.exports = router;
