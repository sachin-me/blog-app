const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

// This api'll create a new user
router.post("/signup", userController.create);

module.exports = router;
