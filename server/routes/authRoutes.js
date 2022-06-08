const router = require("express").Router();
const auth = require("../middleware/auth")
const authCtrl = require("../controllers/authController.js");

router.post("/register", authCtrl.register);
router.post("/login",authCtrl.login);
router.get("/currentuser", auth, authCtrl.getUser)
module.exports = router;
