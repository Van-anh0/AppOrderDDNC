const { numberParser } = require("config/parser");
const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
