const express = require("express");
const router = express.Router();
const Question = require("../models/questions.model");

// ✅ Get questions by domain
router.get("/:domain", async (req, res) => {
  try {
    const domain = req.params.domain;
    const questions = await Question.find({ domain });
    res.json(questions);
  } catch (err) {
    console.error("❌ Error fetching questions by domain:", err.message);
    res.status(500).json({ message: "Failed to fetch questions" });
  }
});

module.exports = router;
