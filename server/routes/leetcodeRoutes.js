const express = require("express");
const router = express.Router();
const LeetcodeProblem = require("../models/LeetcodeProblem");
const verifyToken = require("../middleware/verifyToken");

// Add a new Leetcode problem
router.post("/add", verifyToken, async (req, res) => {
  try {
    const { title, difficulty, status, date } = req.body;

    const newProblem = new LeetcodeProblem({
      userId: req.user.id,
      title,
      difficulty,
      status,
      date,
    });

    await newProblem.save();
    res.status(201).json({ message: "Problem added successfully", newProblem });
  } catch (err) {
    res.status(500).json({ error: "Failed to add problem" });
  }
});

// Get problems of logged-in user
router.get("/", verifyToken, async (req, res) => {
  try {
    const problems = await LeetcodeProblem.find({ userId: req.user.id }).sort({ date: -1 });
    res.status(200).json(problems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch problems" });
  }
});

module.exports = router;
