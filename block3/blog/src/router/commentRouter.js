const express = require("express");

const {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controller/comment.controller");
const commentRouter = express.Router();

commentRouter.get("/comment", getComments);
commentRouter.get("/comment/:id", getCommentById);
commentRouter.post("/comment/create", createComment);
commentRouter.put("/comment/:id", updateComment);
commentRouter.delete("/comment/:id", deleteComment);

module.exports = commentRouter;
