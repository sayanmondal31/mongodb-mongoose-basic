const mongoose = require("mongoose")

// creating schema
const productSchema = new mongoose.Schema({
    name: {type: String, require:true},
    price:{type:Number,require:true}
});

// creates model to database with defined schema
module.exports = mongoose.model('Product',productSchema)