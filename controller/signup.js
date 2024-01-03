const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, msg: "Send all fields" });
    }
    const userexists = await User.findOne({ email });
    if (userexists) {
      return res.status(400).json({ success: "Already Exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(password, salt);
    await User.create({
      name,
      email,
      password: securepassword,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(err);
    res.json({ success: false });
  }
};
module.exports = signup;
