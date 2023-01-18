const express = require("express");
const router = express.Router();
const { getUser, createUser, login } = require("../controller/users");

router.get("/", getUser);
router.post("/register", createUser);
router.post("/login", login);

module.exports = router;
