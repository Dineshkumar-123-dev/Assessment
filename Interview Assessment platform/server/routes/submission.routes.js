const express = require("express");
const router = express.Router();
const Submission = require("../models/submission.model");
//const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// 🔒 Middleware to verify user token
const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

// 🔐 Middleware to verify admin
const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin" && decoded.email !== "admin123@gmail.com") {
      return res.status(403).json({ message: "Access denied" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

// ✅ POST /api/submissions — User submits assessment
router.post("/", verifyUser, async (req, res) => {
  try {
    const { domain, score, totalQuestions, responses, passed } = req.body;

    const newSubmission = new Submission({
      user: req.user.id,
      domain,
      score,
      totalQuestions,
      responses,
      passed,
    });

    await newSubmission.save();
    res.status(201).json({ message: "Submission stored successfully!" });
  } catch (err) {
    console.error("❌ Submission Error:", err);
    res.status(500).json({ message: "Failed to store submission" });
  }
});

// ✅ GET /api/admin/submissions — Admin views all
router.get("/submissions", verifyAdmin, async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate("user", "name email")
      .sort({ submittedAt: -1 });

    res.json(submissions);
  } catch (err) {
    console.error("❌ Fetching submissions failed:", err);
    res.status(500).json({ message: "Error fetching submissions" });
  }
});

module.exports = router;
