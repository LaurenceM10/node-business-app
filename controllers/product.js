//Require the Product model
const Product = require('../models/product');


/**
 * API Rest of products
 * */


/* To add and save a new product */
let addProduct = (req, res) => {
    //Create a new product with the data of the request parameters
    let product = new Product(req.body);

    Product.save(product, (error, data) => {
        if (error) {
            return res.status(500).send({message: `Error to save the product`});
        }

        return res.status(200).send({data});
    });
};


/* To get all products of the database */
let getProducts = (req, res) => {
    Product.find({}, (error, products) => {
        if (error) {
            res.status(500).send({message: 'An error has occurred'});
        } else if (!products) {
            res.status(500).send({message: "There are not products"});
        } else {
            res.render('product',
                {
                    title: 'Productos',
                    data: products
                });
        }
    });
};

module.exports = {
    getProducts,
    addProduct
};