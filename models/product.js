const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a product schema
let productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    units: Number
    // TODO: add pictures to the product. Find a way to make this with mongodb and mongoose -- picture: Buffer
});


/**
 * To use our schema definition, we need to convert our productSchema
 * into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
 *
 * Then, we export the model
 */
module.exports = mongoose.model('product', productSchema);