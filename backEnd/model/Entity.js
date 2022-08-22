const mongoose = require("mongoose");

const EntitySchema = new mongoose.Schema(
  {
    id: { type: String },
    title: {
      type: String,
      required: "please enter  the title",
    },

    sentense: {
      type: String,
    },
    ID: {
      type: String,
      required: "please enter  the entity ID",
    },
    name: {
      type: String,
      required: "please enter  name of entity",
    },
    description: {
      type: String,
      required: "please enter short description",
    },

    category: {
      type: String,
      required: "please enter  entity category",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "entities" }
);

module.exports = mongoose.model("entities", EntitySchema);
