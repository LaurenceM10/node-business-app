//Require the moduls
const Product = require('../models/product');
const helpers = require('../helpers/index');


/**
 * API Rest of products
 * */


/* To add and save a new product */
let addProduct = (req, res) => {
    //To validate the data from the form
    if (!helpers.validateProductForm(req)) {
        //Create a new product with the data of the request parameters
        let product = new Product({name: req.body.name, description: '', price: req.body.price, units: req.body.units});

        product.save((error, data) => {
            if (error) {
                return res.status(500).send({message: `Error to save the product`});
            }

            //When the product is saved, redirect the user to the products page
            res.redirect('/product');
        });
    } else {
        res.render('product', {
            title: 'Productos',
            errorMessage: 'Debes completar todos los campos'
        })
    }
};


/* To get all products of the database */
let getProducts = (req, res) => {
    Product.find({}, (error, products) => {
        if (error) {
            res.status(500).send({message: 'An error has occurred'});
        } else if (!products) {
            res.status(500).send({message: "There are not products"});
        } else {
            //Redirect the user to the products page
            res.render('product',
                {
                    title: 'Productos',
                    data: products
                });
        }
    });
};


/* To update a product by id */
let updateProduct = (req, res) => {
    //Get the id of the request
    let id = req.params.id;
    //Get data from the request
    let productUpdate = req.body;

    Product.findByIdAndUpdate(id, productUpdate,(error, product) => {
        if (error || !product){
            return res.send({message : 'Error updating the product'});
        }

        //Redirect the user to the products page
        res.redirect('/product');
    });
};


/* To delete a product by id */
let deleteProduct = (req, res) => {
    //Get the id of the request
    let id = req.params.id;

    Product.findByIdAndRemove(id, (error, product) => {
        if (error || !product) {
            return res.send({message: 'Error removing the product'})
        }

        //Redirect the user to the products page
        res.redirect('/product');
    });
};


module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
};



