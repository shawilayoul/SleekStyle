const express = require("express");
const { signIn, signUp, logOut } = require("../controllers/authController");

const router = express.Router();

router.post("/register", signUp);
router.post("/login", signIn);
router.post("/logOut", logOut);

module.exports = router;
