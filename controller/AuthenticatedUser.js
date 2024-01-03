const AuthenticatedUser=(req,res)=>{
        res.json({success:true, msg: 'You are authenticated user'})
}
module.exports=AuthenticatedUser