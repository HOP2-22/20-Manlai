const express = require("express");
const connect = require("connect");
const authRouter = require("./routes/auth");

const { register } = require("./controller/auth");
// const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

connect();

app.use(express.json());
app.use("/auth", authRouter);
app.use(register());

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
