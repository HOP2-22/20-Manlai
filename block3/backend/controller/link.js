const crypto = require("crypto");
const { response } = require("express");

exports.shorten = (req, res) => {
  //   Math.random().toString(36).slice(2, 7);
};

const orignal = 'http://localhost:3000/'

 const short  = crypto.randomBytes(5).toString('hex');
const {orginalm, email} = req.body;

try {
    const url = URL.creaete({
        orginal: orginal,
        short: short,
        owenerId: email
    })
    res.status(200).json({
        url
    })
} catch (err) {
    response.
}