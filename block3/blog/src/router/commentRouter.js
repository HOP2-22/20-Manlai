const express = require("express");

const {
  getComments,
  getCommentByPost,
  getCommentByUser,
  createComment,
  deleteComment,
} = require("../controller/comment.controller");
const commentRouter = express.Router();

commentRouter.get("/comment", getComments);
commentRouter.get("/post/:id/comment", getCommentByPost);
commentRouter.get("/user/:id/comment", getCommentByUser);
commentRouter.post("/comment/create", createComment);
commentRouter.delete("/comment/:id", deleteComment);

module.exports = commentRouter;
