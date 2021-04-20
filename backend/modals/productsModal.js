const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    name: {type:String,unique:true},
    category: [String],
    image: {type:String},
    price: {type:Number},
    countInStock: {type:Number},
    brand: {type:String},
    rating: {type:Number},
    numReviews: {type:Number},
    description: {type:String},
    quantity:{type:Number}
});

const productsModal = mongoose.model('product',productsSchema);

module.exports = productsModal ;