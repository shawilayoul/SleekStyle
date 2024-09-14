const bycript = require("bcryptjs");
const User = require("../models/authModel.js");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashPassword = await bycript.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      verificationToken,
    });
    await newUser.save();
    // generting token
    const token = generateTokenAndSetCookie(res, newUser._id);

    res.status(201).json({
      success: true,
      message: "user has been created successfully",
      user: {
        ...newUser._doc,
        password: undefined,
      },
      token
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error);
  }
};
// generting token
const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRETkEY, {
    expiresIn: "5d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    //secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};

// sigin
const signIn = async (req, res) => {
  res.send("hello from sigin");
};
const logOut = async (req, res) => {
  res.send("hello from logout");
};

module.exports = {
  signIn,
  signUp,
  logOut,
};
