const { response } = require("express");
const Post = require("../models/Post");

exports.getPosts = async (request, response) => {
  try {
    const posts = await Post.find();
    response.send({ posts: posts });
  } catch (error) {
    response.status(400).send(error);
  }
};

exports.getPostById = async (request, response) => {
  const _id = request.params.id;
  try {
    const post = await Post.findById({ _id });
    if (!post) {
      response.status(404).json({ message: "No post found" });
    }
    response.send(post);
  } catch (error) {
    response.status(400).send(error);
  }
};

exports.createPost = async (request, response) => {
  const post = new Post(request.body);
  try {
    const result = await post.save();
    response.send("Successfully created Post!");
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.updatePost = async (request, response) => {
  const _id = request.params.id;
  const post = request.body;
  try {
    const updatedData = await Post.findByIdAndUpdate(_id, {
      ...post,
    });
    response
      .status(201)
      .json({ message: "successfully updated", data: updatedData });
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.deletePost = async (request, response) => {
  const _id = request.params.id;
  try {
    const deleteData = await Post.findByIdAndDelete({ _id });
    response.status(200).json({
      message: "Successfully deleted Post!",
      data: deleteData,
    });
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};
