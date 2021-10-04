const express = require("express");
const postController = require("../controllers/post.controller");
const userController = require("../controllers/user.controller");
const router = express.Router();

// This api'll create a new user
router.post("/signup", userController.create);
// This api'll login the user
router.post("/login", userController.login);
// it'll logout current loggedin user
router.delete("/logout", userController.logoutUser);

// POST Api starts here
router.post("/post", postController.create);

// POST Api ends here
module.exports = router;
