const User = require("../model/user");
const bcrypt = require("bcrypt");
const { response } = require("express");

const register = async (request, response) => {
  const { email, password } = request.body;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User.create({ email, password: hashedPassword });
    response.status(200).json({
      message: "User created successfully!",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    response.status(200).json({
      message: "Logged in successfully",
    });
  } else {
    response.status(401).json({
      message: "Password or Email is incorrect",
    });
  }
};

module.exports = {
  register,
  login,
};
