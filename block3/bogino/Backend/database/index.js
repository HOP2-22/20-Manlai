const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URL || "";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Data Base succefully connected!");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connect;
