const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    title: { type: String },
    text: { type: String },
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
