const User = require("../model/user");
const jwt = require("jsonwebtoken");

const authCtrl = {
  register: async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
      const user_name = await User.findOne({ email: email });
      if (user_name)
        return res.status(400).json({ msg: "username da ton tai" });
      if (password.length < 6)
        return res.status(400).json({ msg: "password qua ngan" });
      const newUser = new User({
        fullname,
        password,
        email,
      });
      const access_token = createAccessToken({ id: newUser._id });
      await newUser.save();
      return res.json({
        msg: "Dang ky thanh cong",
        access_token,
        user: {
          ...newUser._doc,
          password: "",
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const loginUser = await User.findOne({ email: email });
      if (!loginUser)
        return res.status(400).json({ msg: "tai khoan khong ton tai" });
      if (password !== loginUser.password)
        return res.status(400).json({ msg: "sai mat khau" });
      const access_token = createAccessToken({ id: loginUser._id });
      return res.json({
        msg: "Dang nhap thanh cong",
        access_token,
        user: {
          ...loginUser._doc,
          password: "",
        },
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getUser: async (req, res) =>{
    try{
      return res.json({user: req.current_user._doc});
    } catch{}
  } 
};
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
};

module.exports = authCtrl;
