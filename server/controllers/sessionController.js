const CodingSession = require("../models/CodingSession");

const createSession = async (req, res) => {
  try {
    const { duration, date, tags } = req.body;
    const newSession = new CodingSession({
      userId: req.user.id,
      duration,
      date,
      tags,
    });
    await newSession.save();
    res.status(201).json({ message: "Session created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserSessions = async (req, res) => {
  try {
    const sessions = await CodingSession.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createSession, getUserSessions };
