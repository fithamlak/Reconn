const mongoose = require("mongoose");

const ToolsSchema = new mongoose.Schema({
  TransformID: {
    type: String,
    required: true,
  },
  Tools: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tool", ToolsSchema);
