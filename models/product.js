const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a product schema
let ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    units: Number,
    picture: Buffer
});