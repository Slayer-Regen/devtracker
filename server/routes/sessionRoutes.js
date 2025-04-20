const express = require("express");
const router = express.Router();
const { createSession, getUserSessions } = require("../controllers/sessionController");
const verifyToken = require("../middleware/verifyToken");

router.post("/create", verifyToken, createSession);
router.get("/", verifyToken, getUserSessions);

module.exports = router;
