const mongoose = require("mongoose");

const TransformSchema = new mongoose.Schema(
  {
    title: String,
    sentense: String,
    ID: {
      type: String,
      required: true,
    },
    name: String,
    inputEntity: String,
    outputEntity: String,
    reverseFlag: {
      type: Boolean,
      default: true,
    },
    usedTool: String,
    description: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "transforms" }
);

module.exports = mongoose.model("transforms", TransformSchema);
