const jwt = require("jsonwebtoken");
const Post = require("../models/Post");

const postController = {
  create: async function (req, res) {
    const { title, text } = req.body;

    if (!title && !text) {
      return res.status(400).json({
        error: "Title and text is required.",
      });
    }

    if (!title) {
      return res.status(400).json({
        error: "Title is required.",
      });
    }
    if (!text) {
      return res.status(400).json({
        error: "Text is required.",
      });
    }
    if (!req.headers.cookie.includes("token")) {
      return res.status(401).json({
        error: "Please login.",
      });
    }

    let token = req.headers.cookie.split("token=");
    token = token[token.length - 1];
    const user = jwt.verify(token, "secret");
    const { id } = user;

    if (!id) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    const newPost = new Post({
      title,
      text,
      user: id,
    });

    newPost.save((err, post) => {
      if (err) {
        return res.status(500).json({
          error: "Not able to create post. Please try after sometimes.",
        });
      } else {
        return res.status(200).json({
          message: "Post created successfully",
        });
      }
    });
  },
};

module.exports = postController;
