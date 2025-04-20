const mongoose = require("mongoose");

const leetcodeProblemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Solved", "Attempted"],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("LeetcodeProblem", leetcodeProblemSchema);
