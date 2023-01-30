const express = require("express");
const cors = require("cors");
const connect = require("./db");
const PORT = 3333;
const userRouter = require("./router/userRouter");
const linkRouter = require("./router/linkRouter");

const app = express();

connect();
app.use(cors());
app.use(express.json());

app.use("/", userRouter);
app.use("/", linkRouter);

app.listen(PORT, () => {
  `Server is listening on ${PORT}`;
});
