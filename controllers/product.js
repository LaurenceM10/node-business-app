//Require the Product model
const Product = require('../models/product');


/**
 * Operations of products
 * */


//To get all products of the database
let getProducts = (request, response) => {
    Product.find({}, (error, data) => {
        if (error) {
            response.status(500).send({message: `Cannot found products`});
        } else if (!data) {
            response.status(404).send({message: `There are not products`});
        } else {
            response.status(200).send({data});
        }
    });
};