const GithubStats = require("../models/GithubStats");

exports.addGithubStats = async (req, res) => {
  try {
    const { weekStart, totalCommits, repoName } = req.body;
    const newStats = new GithubStats({
      userId: req.user.id,
      weekStart,
      totalCommits,
      repoName,
    });
    await newStats.save();
    res.status(201).json({ message: "GitHub stats added", newStats });
  } catch (err) {
    res.status(500).json({ error: "Failed to save GitHub stats" });
  }
};

exports.getGithubStats = async (req, res) => {
  try {
    const stats = await GithubStats.find({ userId: req.user.id }).sort({ weekStart: -1 });
    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch GitHub stats" });
  }
};
