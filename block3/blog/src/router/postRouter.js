const express = require("express");

const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/post.controller");
const postRouter = express.Router();

postRouter.get("/post", getPosts);
postRouter.get("/post/:id", getPostById);
postRouter.post("/post/create", createPost);
postRouter.put("/post/:id", updatePost);
postRouter.delete("/post/:id", deletePost);

module.exports = postRouter;
