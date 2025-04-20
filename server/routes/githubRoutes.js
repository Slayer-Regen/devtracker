const express = require("express");
const router = express.Router();
const { addGithubStats, getGithubStats } = require("../controllers/githubController");
const verifyToken = require("../middleware/verifyToken");

router.post("/add", verifyToken, addGithubStats);
router.get("/all", verifyToken, getGithubStats);

module.exports = router;
