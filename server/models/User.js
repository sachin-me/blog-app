const mongoose = require("mongoose");
const argon2 = require("argon2");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

userSchema.pre("save", async function (next) {
  if (this.password) {
    this.password = await argon2.hash(this.password);
    next();
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
