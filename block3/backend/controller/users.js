const userModel = "../models/usersModel.js";
const bcrypt = require("bcrypt");

exports.getUser = (req, res) => {
  if (!req.body?.email) {
    res.status(400).json({ message: "Bad request" });
  }
  res.status(200).json({ message: "Users data here" });
};

exports.login = async (req, res) => {
  if (!req.body?.email || !req.body?.password) {
    res.status(400).json({ message: "Bad request" });
  }
  const { email, password } = req.body;
  try {
    const response = await userModel.findOne({
      email,
    });
    if (response.length === 0) {
      res.status(200).json({ status: "error", error: "User not found" });
      return;
    }
    const userData = response[0];
    const match = await bcrypt.compare(password, userData.password);
    if (match) {
      res
        .status(200)
        .json({ message: "Logged in successfully", username: email });
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
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await userModel.create({
      email,
      hashedPassword,
    });
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log(JSON.stringify(err));
    if (error.code === 11000) {
      return res.send({ status: "error", error: "email already exists" });
    }
    throw error;
  }
};
