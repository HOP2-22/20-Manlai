const linkModel = require("../models/linkModel.js");
const { findOne } = require("../models/usersModel.js");
const { response } = require("express");
const crypto = require("crypto");

exports.shorten = async (req, res) => {
  const short = crypto.randomBytes(5).toString("hex");
  const { orginal, email } = req.body;

  try {
    const url = await linkModel.create({
      originalLink: orginal,
      shortLink: short,
      email: email,
    });

    res.status(200).json({
      url: url.shortLink,
      message: "hi here is your link",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
};
