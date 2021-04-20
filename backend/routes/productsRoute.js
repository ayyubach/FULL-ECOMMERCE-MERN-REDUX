const express = require('express');
const productsRoute = express.Router();
const productsModal = require('../modals/productsModal.js');
const authUser = require('../auth.js');
const authAdmin = require('../authAdmin.js');

productsRoute.get('/',async (req,res)=>{
    try{
            const products = await productsModal.find();
            res.send(products)
    }catch(err){
        res.send({message:'products not found',error:err.message});
        
    }


})

productsRoute.get('/:gender/:category',async (req,res)=>{
    const products = await productsModal.find();
    const filter = [req.params.gender,req.params.category];
    const productsList = products.filter(p=>JSON.stringify(p.category) == JSON.stringify(filter) )
    res.send(productsList);
})

productsRoute.post('/addproduct',authUser,authAdmin,async(req,res)=>{
    const newProduct = new productsModal({
        name: req.body.product.name,
        category: req.body.product.category,
        image: req.body.product.imgpath,
        price: req.body.product.price,
        countInStock: req.body.product.countinstock,
        brand: req.body.product.brand,
        rating: req.body.product.rating,
        numReviews:req.body.product.numreviews ,
        description: req.body.product.description,
        quantity:req.body.product.quantity
    });

    const createdProduct = await newProduct.save();
    res.send(createdProduct);
})

productsRoute.post('/removeproduct',authUser,authAdmin,async (req,res)=>{
    try{
        const product = await productsModal.deleteOne({name:req.body.productName});
        res.send({message:'Product deleted successfully'})
    }catch(err){
        res.send({message:'Failed to remove product'})
    }
    
})


module.exports = productsRoute;