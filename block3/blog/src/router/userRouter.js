const express = require("express");

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.get("/user", getUsers);
userRouter.get("/user/:id", getUserById);
userRouter.post("/user/create", createUser);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

module.exports = userRouter;
