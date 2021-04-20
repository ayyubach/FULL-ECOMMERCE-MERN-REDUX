const express = require('express');
const userRoute = express.Router();
const userModal = require('../modals/userModal.js');
const jwt = require('jsonwebtoken');
const authUser = require('../auth.js');
const authAdmin = require('../authAdmin.js');



userRoute.post('/getuser',async (req,res)=>{
    try{
            let user = await userModal.findOne({email:req.body.email});
            
            if(user.password == req.body.password){
                if(user.token==''){
                token = jwt.sign({user},'aaaaaaaa');
                user.token = token || '';
                await user.save();
                }
               
                
                res.send(user)
            }else{
                res.send({error:"Invalid password"})
            }
            
    }catch(err){
        res.send({message:'user not found',error:err.message});
        
    }


})

userRoute.post('/register',async (req,res)=>{
    try{
        const newUser = new userModal({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address,
            city:req.body.city,
            zipcode:req.body.zipcode,
            country:req.body.country,
    
        });
    
        const createdUser = await newUser.save();
    
        res.send(createdUser);

    }catch(err){
        console.log(err);
    }
})


userRoute.get('/get/:email',authUser,async (req,res)=>{
    try{
    const user = await userModal.findOne({email:req.params.email});
    res.send({user})
    }catch(err){
    res.send({error:"Error fetching user "})
    }
})


userRoute.put('/edituser',authUser,async (req,res)=>{
  
    try{
        const user = await userModal.findById(req.body._id);
            
        if(user){
            user.name=req.body.name || user.name;
            user.email=req.body.email || user.email;
            user.address=req.body.address || user.address;
            user.city=req.body.city || user.city;
            user.country=req.body.country || user.country;
            user.zipcode=req.body.zipcode || user.zipcode;
            
            const updatedUser = await user.save();
            return res.send({success :"User informatioms saved successfully",user})
        }
        res.send({error:"User is not found",updatedUser:{}})
    }catch(err){
     res.send({message:"Error in saving user informations",error:err})
    }
})

userRoute.post('/listusers',authUser,authAdmin,async (req,res)=>{
const users = await userModal.find({}).select('-token -password');
res.send(users)
})

userRoute.post('/removeuser',authUser,authAdmin,async (req,res)=>{
    //console.log(req.body.userEmail)
        try{
            const user = await userModal.deleteOne({email:req.body.userEmail});
            res.send({message:'User deleted successfully'})
        }catch(err){
            res.send({message:'Failed to remove user'})
        }
        
    })




module.exports = userRoute;