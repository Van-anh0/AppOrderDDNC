const User = require("../model/user");
const jwt = require("jsonwebtoken");

const authCtrl = {
  register: async (req, res) => {
    try {
      const { fullname, username, email, password, gender } = req.body;
      const user_name = await User.findOne({ username: username });
      if (user_name)
        return res.status(400).json({ msg: "username da ton tai" });
      if (password.length < 6)
        return res.status(400).json({ msg: "password qua ngan" });
      const newUser = new User({
        fullname,
        username,
        password,
        email,
        gender,
      });
      const access_token = createAccessToken({ id: newUser._id });
      const refresh_token = createRefreshToken({ id: newUser._id });
      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/api/refresh_token",
      });
      await newUser.save();
      res.json({
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
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const loginUser = await User.findOne({ username: username });
      if (!loginUser)
        return res.status(400).json({ msg: "tai khoan khong ton tai" });
      if (password !== loginUser.password)
        return res.status(400).json({ msg: "sai mat khau" });
      const access_token = createAccessToken({ id: loginUser._id });
      const refreshtoken = createRefreshToken({ id: loginUser._id });
      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/api/refresh_token",
      });

      res.json({
        msg: "Dang nhap thanh cong",
        access_token,
        user: {
          ...loginUser._doc,
          password: "",
        },
      });
      next();
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  logout: async (_, res) => {
    try {
      res.clearCookie("refresh_token", { path: "/api/refresh_token" });
      return res.json({ msg: "da dang xuat" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  generateAccessToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: "vui long dag nhap" });
      jwt.verify(rf_token, process.env.REFRESH_TOKEN, async (err, result) => {
        if (err) return res.status(400).json({ msg: "vui long dang nhap" });
        const user = await User.findById(result.id).select("-password");
        if (!user)
          return res.status(400).json({ mgs: "nguoi dung khong ton tai" });
        const access_token = createAccessToken({ id: user._id });
        return res.json({
          access_token,
          user,
        });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
};
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: "30d" });
};

module.exports = authCtrl;
