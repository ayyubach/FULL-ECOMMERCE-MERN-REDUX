const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    name: {type:String},
    email: {type:String},
    qty: {type:Number},
    product: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }],
    address: {type:String},
    city: {type:String},
    country: {type:String},
    zipcode: {type:Number},
});



const orderModal = mongoose.model('order',orderSchema);

module.exports = orderModal ;