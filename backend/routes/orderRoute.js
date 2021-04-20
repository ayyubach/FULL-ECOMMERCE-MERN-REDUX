const express = require('express');
const orderRoute = express.Router();
const orderModal = require('../modals/orderModal.js');
const auth = require('../auth.js')

orderRoute.post('/',auth,async (req,res)=>{
   console.log(req.body)
    const order = new orderModal({
        name:req.body.name,
        email:req.body.email,
        qty:req.body.quantity,
        product:req.body._id,
        address:req.body.address,
        city:req.body.city,
        country:req.body.country,
        zipcode:req.body.zipcode

    });
const createdOrder = await order.save();
res.send(createdOrder)

})

orderRoute.get('/',async (req,res)=>{
    const order = await orderModal.find({}).populate('product');
    res.send(order);
});

orderRoute.post('/mine',auth,async (req,res)=>{
    const order = await orderModal.find({email:'ayyub@email.com'}).populate('product');
    res.send(order);
});






module.exports = orderRoute;