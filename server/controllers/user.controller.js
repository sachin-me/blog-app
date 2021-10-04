const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userController = {
  create: async function (req, res) {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      return res.status(400).json({
        error: "Name, Email, and Password is required.",
      });
    }

    if (!name) {
      return res.status(400).json({
        error: "Name is required.",
      });
    }
    if (!email) {
      return res.status(400).json({
        error: "Email is required.",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Password is required.",
      });
    }

    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return res.status(404).json({
          error: "Unable to find the user.",
        });
      } else {
        if (!user) {
          const newUser = new User({
            name,
            email,
            password,
          });
          newUser.save((error) => {
            if (error) {
              return res.status(500).json({
                error: "Failed to create user. Please try again.",
              });
            } else {
              return res.status(200).json({
                message: "User created successfully",
                data: {
                  id: newUser._id,
                  name,
                  email,
                },
              });
            }
          });
        } else {
          return res.status(400).json({
            error: "User already exist. Please login.",
          });
        }
      }
    });
  },
  login: async function (req, res) {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(400).json({
        error: "Name, Email, and Password is required.",
      });
    }

    if (!email) {
      return res.status(400).json({
        error: "Email is required.",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Password is required.",
      });
    }

    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({
          error: "No matching user found. Please create a user.",
        });
      }

      const id = user._id;
      const checkPassword = await argon2.verify(user.password, password);

      if (!checkPassword) {
        return res.status(401).json({
          error: "Password is incorrect.",
        });
      }

      const token = jwt.sign(
        {
          id,
        },
        "secret"
      );

      res.cookie("token", token, {
        expires: new Date(Date.now() + 84000000),
        httpOnly: true,
      });

      return res.status(200).json({
        message: `${user.name}, Successfully logged in`,
        token,
        user: {
          name: user.name,
          email,
          id,
        },
      });
    } catch (error) {
      return res.status(500).json({
        error: "Something went wrong.",
      });
    }
  },
};

module.exports = userController;
