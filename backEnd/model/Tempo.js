const mongoose = require("mongoose");

const TempoSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    description: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "tempos" }
);

module.exports = mongoose.model("tempos", TempoSchema);
