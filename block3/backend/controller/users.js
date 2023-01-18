const userModel = require("../models/usersModel.js");
const bcrypt = require("bcrypt");
const { findOne } = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getUser = async (req, res) => {
  if (!req.body?.email) {
    res.status(400).json({ message: "Bad request" });
  }
  const user = await userModel.find();
  if (req.body?.email === user) {
    console.log("User not found");
  }
  try {
    res
      .status(200)
      .json({ message: "Successfully retrieved users", data: user });
  } catch (error) {
    console.log("User not found");
  }
};

exports.login = async (req, res) => {
  // hereglegchees emaiol password  baigaaa esehiig shalgah
  if (!req.body?.email || !req.body?.password) {
    res.status(400).json({ message: "Bad request" });
  }

  // hereglegchees emaiol password avah
  const { email, password } = req.body;

  // error handle hiih
  try {
    // irsen email-eer useriig haih
    const user = await userModel.findOne({
      email,
    });

    // hervee iim user bhgui bol aldaa  butssaah
    if (!user) {
      res.status(400).json({ status: "error", error: "User not found" });
      return;
    }

    // hervee iim user baival irsen password-iig hashed password jishih
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      // token generatleh
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.ACCESS_TOKEN_KEY,
        {
          expiresIn: "5m",
        }
      );

      // genertelsen token-oo responsoor butsaah
      res.status(200).json({
        message: "Logged in successfully",
        email,
        token,
      });
    } else {
      res.status(404).json({ message: "Email or password incorrect" });
    }
  } catch (error) {
    if (error.code === 11000) {
      return res.send({ status: "error", error: "email already exists" });
    }
    throw error;
  }
};

exports.createUser = async (req, res) => {
  if (!req.body?.email || !req.body?.password) {
    res.status(400).json({ message: "Bad request" });
  }
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (user) {
    return res.send({ status: "error", error: "email already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      email,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ message: "User created successfully", email: newUser.email });
  } catch (err) {
    console.log(err);
  }
};
