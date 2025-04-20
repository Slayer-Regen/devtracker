const mongoose = require("mongoose");

const githubStatsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  weekStart: {
    type: Date,
    required: true,
  },
  totalCommits: {
    type: Number,
    required: true,
  },
  repoName: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("GithubStats", githubStatsSchema);
