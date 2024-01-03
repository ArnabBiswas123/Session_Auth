const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { setUser } = require("../service/auth");
const { v4: uuidv4 } = require("uuid");
const login=async(req,res)=>{
        try {
            const {email, password } = req.body;

            if ( !email || !password) {
              return res.json({ success: false, msg: "Send all fields" });
            }

            let userData = await User.findOne({ email })
            if (!userData) {
                return res.status(400).json({success:false, errors: 'Try logging valid credentials' });
            }
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)

            if (!pwdCompare) {
                return res.status(400).json({success:false, errors: 'Try logging valid credentials' });
            }

            const sessionId = uuidv4();
            setUser(sessionId, userData);
            res.cookie("uid", sessionId);

          
            return res.json({success:true})

        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
}
module.exports=login