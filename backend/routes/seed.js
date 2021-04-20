const express = require('express');
const jwt = require('jsonwebtoken');
const seedRoute = express.Router();
const productsData = require('../data/products.js');
const usersData = require('../data/users.js');
const userModal = require('../modals/userModal.js');
const productsModal = require('../modals/productsModal.js');

seedRoute.get('/products',async (req,res)=>{
    const productsCreated = await  productsModal.insertMany(productsData);
    
    res.send(productsCreated);
})

seedRoute.get('/users',async (req,res)=>{
try{
    const usersCreated = await  userModal.insertMany(usersData);

    res.send(usersCreated);
}catch(err){
console.log(err);
}
})

module.exports = seedRoute;