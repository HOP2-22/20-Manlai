const express = require("express");
const userRouter = require("./router/userRouter.js");
const postRouter = require("./router/postRouter.js");
const commentRouter = require("./router/commentRouter.js");
const mongoose = require("mongoose");

const URI =
  "mongodb+srv://Manlai:bruhlol123123@cluster0.yjkwfg2.mongodb.net/test";

const connection = mongoose.connection;

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(postRouter);
app.use(userRouter);
app.use(commentRouter);

mongoose.connect(URI);

connection.once("open", () => {
  console.log("Successfully connected");
});

app.listen(PORT || 8000, () => {
  console.log(`listening on port http://localhost:${PORT}/`);
});
