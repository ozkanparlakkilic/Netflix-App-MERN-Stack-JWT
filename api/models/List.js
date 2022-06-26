const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: [{ type: mongoose.Types.ObjectId, ref: "movies" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);
