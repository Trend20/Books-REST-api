const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide name!"],
    },
    email: {
      type: String,
      required: [true, "Please provide email!"],
    },
    password: {
      type: String,
      required: [true, "Please provide password!"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm password!"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
