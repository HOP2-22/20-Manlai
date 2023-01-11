const express = require("express");
const { register } = require("../controller/auth");

const router = express.Router();

router.post("/register", register).get("/", (request, response) => {
  console.log(request.body);
  response.send("Online!");
});

module.exports = router;
