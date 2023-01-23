const express = require("express");
const router = express.Router();
const { getUser, createUser, login } = require("../controller/users");
const { shorten } = require("../controller/link");

router.get("/", getUser);
router.post("/register", createUser);
router.post("/login", login);
router.post("/", shorten);

module.exports = router;
