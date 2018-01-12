const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a product schema
let purchaseSchema = new Schema({
    productName: String,
    price: Number,
    units: Number,
    provider: String
});


/**
 * To use our schema definition, we need to convert our productSchema
 * into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
 *
 * Then, we export the model
 */
module.exports = mongoose.model('purchase', purchaseSchema);