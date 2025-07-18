const express = require("express");
const router = express.Router();
const Submission = require("../models/submission.model");

router.post("/submit", async (req, res) => {
  const { userId, username, domain, score, total, passed } = req.body;
  try {
    const submission = new Submission({ user: userId, username, domain, score, total, passed });
    await submission.save();
    res.json({ message: "Submission saved!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to save submission" });
  }
});

module.exports = router;
