const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  email: String,
  password: String,
});

const userModel = mongoose.model("users", userschema);

module.exports = userModel;
