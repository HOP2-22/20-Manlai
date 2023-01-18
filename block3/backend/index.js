const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./db");
const PORT = 3333;
const userRouter = require("./router/router");

app = express();

connect();
app.use(cors());
app.use(express.json());

app.use("/", userRouter);

app.listen(PORT, () => {
  `Server is listening on ${PORT}`;
});
