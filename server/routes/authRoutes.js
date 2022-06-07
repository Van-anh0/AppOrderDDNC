const router = require("express").Router();
const authCtrl = require("../controllers/authController.js");

router.post("/register", authCtrl.register);
router.post("/login",authCtrl.login);
module.exports = router;
