const express = require("express");
const {
  signIn,
  signUp,
  logOut,
  verifyEmail,
  forgotPassword,
  resetPasssword,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", signUp);
router.post("/login", signIn);
router.post("/logOut", logOut);
router.post("/verifyEmail", verifyEmail);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPasssword/:token", resetPasssword);
module.exports = router;
