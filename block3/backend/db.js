const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Manlai:bruhlol123123@cluster0.xbywkvt.mongodb.net/test";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connection successful");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
