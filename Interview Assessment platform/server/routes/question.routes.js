// routes/question.routes.js
const express = require("express");
const router = express.Router();
const Question = require("../models/question.model");

// 🔁 Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch questions" });
  }
});

// 🔍 Get 20 random questions for domain
router.get("/by-domain/:domain", async (req, res) => {
  try {
    const domain = decodeURIComponent(req.params.domain);
    const questions = await Question.aggregate([
      { $match: { domain } },
      { $sample: { size: 20 } },
    ]);
    if (!questions.length) {
      return res.status(404).json({ message: "No questions found for this domain" });
    }
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// 🔍 Get question by ID
router.get("/by-id/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: "Question not found" });
    res.json(question);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ➕ Add new question
router.post("/", async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ message: "Question added", question });
  } catch (err) {
    res.status(500).json({ message: "Failed to add question" });
  }
});

// ✏️ Update question
router.put("/:id", async (req, res) => {
  try {
    const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update question" });
  }
});

// 🗑️ Delete question
router.delete("/:id", async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete question" });
  }
});

module.exports = router;
