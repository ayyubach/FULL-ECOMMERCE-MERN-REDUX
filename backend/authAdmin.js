const authAdmin = (req,res,next)=>{

    //console.log(req.user.user.isAdmin)
    if(!req.user.user.isAdmin){
        return next(new Error('Not Authorized to access here '));
    }

    next();
}
module.exports = authAdmin;