const router = require("express").Router();
const authCtrl = require("../controllers/authController.js");
const auth = require("../middleware/auth.js");
const asyncHandler = require("express-async-handler");
const Users = require("../model/user.js");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.post("/logout", authCtrl.logout);
router.post("/refresh_token", authCtrl.generateAccessToken);
router.get(
  "/",
  asyncHandler(async (req, res) => {
      const users = await Users.find({});
      res.json(users);
  })
);
module.exports = router;
