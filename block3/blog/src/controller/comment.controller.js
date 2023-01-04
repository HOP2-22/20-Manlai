const { response } = require("express");
const Comment = require("../models/Comment");

exports.getComments = async (request, response) => {
  try {
    const comments = await Comment.find();
    response
      .status(200)
      .send({ message: "Succesfully recieved comments!", data: comments });
  } catch (error) {
    response.status(400).send(error);
  }
};

exports.getCommentByPost = async (request, response) => {
  const _id = request.params.id;
  try {
    const post = await Comment.findById({ _id }); //here
    if (!post) {
      response.status(404).json({ message: "No post found" });
    }
    response.send(post);
  } catch (error) {
    response.status(400).send(error);
  }
};

exports.getCommentByUser = async (request, response) => {
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

exports.createComment = async (request, response) => {
  const post = new Post(request.body);
  try {
    const result = await post.save();
    console.log(result);
    response.send("Successfully created Post!");
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.deleteComment = async (request, response) => {
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
