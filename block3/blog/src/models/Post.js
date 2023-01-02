const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const PostSchema = new Schema({
  text: { type: "String" },
  like: { type: "Number", default: 0 },
  link: { type: "String" },
});

const Post = model("posts", PostSchema);

module.exports = Post;
