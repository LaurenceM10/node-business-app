const Purchase = require('../models/purchase');

/*
* CRUD
* */


let addPurchase = (req, res) => {
    //Get data from the request
    let purchase = new Purchase({name: req.body.productName, price: req.body.price, units: req.body.units, provider: req.body.provider});

    //Save the product
    purchase.save((error, data) => {
       if (error) {
           return res.send({message : 'Error to save the purchase'});
       }

       //Redirect to the purchases page
       res.redirect('/purchase');
    });
};


/**
 * Get one purchase by id
 *
 * @param req
 * @param res
 */
let getPurchase = (req, res) => {
    //Get the id from the request
    let id = req.params.id;

    //Find the product by request id
    Purchase.findById(id, (error, purchase) => {
        if (error || !purchase) {
            res.send({message: 'Error to get the purchase'});
        }

        //Redirect to the purchases page
        res.redirect('/');
    });
};

/**
 * Get all purchases
 *
 * @param req
 * @param res
 */
let getPurchases = (req, res) => {
    //Find all
    Purchase.find({}, (error, purchases) => {
        if (error || !purchases) {
            res.send({message: 'Error to get the purchase'});
        }

        console.log(purchases);

        //Redirect to the purchases page
        res.render('purchase', {
            title: 'Compras',
            data: purchases
        });
    });
};


/**
 * Update a purchase by id
 *
 * @param req
 * @param res
 */
let updatePurchase = (req, res) => {
    //Get the id from the request
    let id = req.params.id;

    //Get the data from the request
    let purchase = req.body;

    //Find by request id and update the purchase with the new data
    Purchase.findByIdAndUpdate(id, purchase, (error, purchase) => {
        if (error || !purchase) {
            res.send({message: 'Error to get the purchase'});
        }

        //Redirect to the purchases page
        res.redirect('/purchase');
    });
};


/**
 * Delete a purchase by id
 *
 * @param req
 * @param res
 */
let deletePurchase = (req, res) => {
    //Get the id from the request
    let id = req.params.id;

    //Find by request id and delete the purchase
    Purchase.findByIdAndRemove(id, (error, purchase) => {
        if (error || !purchase) {
            res.send({message: 'Error to get the purchase'});
        }

        //Redirect to the purchases page
        res.redirect('/purchase');
    });
};


module.exports = {
    addPurchase,
    getPurchase,
    getPurchases,
    updatePurchase,
    deletePurchase
};


