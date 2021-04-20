const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {type:String},
    email: {type:String,unique:true},
    password: {type:String},
    city: {type:String},
    address: {type:String},
    country: {type:String},
    zipcode: {type:Number},
    isAdmin:{type:Boolean,default:false},
    token: {type:String,default:''},

});


const userModal = mongoose.model('user',userSchema);

module.exports = userModal ;