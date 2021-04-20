const jwt = require('jsonwebtoken');
const userModal = require('./modals/userModal');

const authUser = async (req,res,next)=>{
    
    let token;
    if(req.body.headers.authorization && req.body.headers.authorization.startsWith("Bearer")){
    token = req.body.headers.authorization.split(" ")[1];
    
    }

if(!token){
    return next(new Error('Not Authorized to access here '));
}

const decoded = jwt.verify(token,'aaaaaaaa');
const existedUser = await userModal.findOne({email:decoded.user.email});

if(!existedUser){
    return next(new Error('User is not exist ! '));
}else if(existedUser.password !== decoded.user.password){
    return next(new Error('Error with your saved password ! '));
}
req.user = decoded;
next()
}

module.exports = authUser;
//exports.authAdmin = authAdmin;