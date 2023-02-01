const express = require("express");
const router = express.Router();
const { shorten } = require("../controller/link");

router.post("/", shorten);

module.exports = router;
