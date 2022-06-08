const mongoose = require("mongoose");
const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
      default: "",
    },
    rate: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Food", foodSchema);
