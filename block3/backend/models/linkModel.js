const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  originalLink: String,
  shortLink: String,
  email: email,
});

const linkModel = mongoose.model("link", linkSchema);

module.exports = linkModel;
