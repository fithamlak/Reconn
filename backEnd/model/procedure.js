const mongoose = require("mongoose");

const ProcedureSchema = new mongoose.Schema({
  TransformID: {
    type: String,
    required: true,
  },
  ToolSelected: {
    type: String,
    required: true,
  },
  procidure: {
    type: String,
    required: true,
  },

  example: {
    type: String,
    required: true,
  },
  resource: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("procedure", ProcedureSchema);
