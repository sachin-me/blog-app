const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

// This api'll create a new user
router.post("/signup", userController.create);
// This api'll login the user
router.post("/login", userController.login);

module.exports = router;
