const linkModel = require("../models/linkModel.js");
const crypto = require("crypto");

exports.shorten = async (req, res) => {
  const { orginal, email } = req.body;
  // if (!email || !orginal) {
  //   res.status(400).json({
  //     message: "Invalid credentials",
  //   });
  //   return;
  // }
  const short = crypto.randomBytes(5).toString("hex");
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
