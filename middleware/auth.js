const { getUser } = require("../service/auth");

async function protect(req, res, next) {
  const userUid = req.cookies?.uid;


  if (!userUid) return res.json({success:false, msg:'Not valid user'})
  const user = getUser(userUid);

  console.log(user)
  if (!user) {
    
    return res.json({success:false, msg:'Not valid user'})}

  req.user = user;
  next();
}


module.exports = { protect };