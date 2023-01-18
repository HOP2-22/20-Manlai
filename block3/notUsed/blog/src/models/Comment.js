const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const CommentSchema = new Schema({
  data: { type: "String" },
  like: { type: "Number", default: 0 },
  replies: { type: "Number" },
});

const Comment = model("comments", CommentSchema);

module.exports = Comment;
