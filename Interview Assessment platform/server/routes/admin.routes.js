const express = require("express");
const router = express.Router();
const Question = require("../models/question.model");
const Submission = require("../models/submission.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Middleware to verify admin
const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") return res.status(403).json({ message: "Forbidden" });
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Add question
router.post("/add-question", verifyAdmin, async (req, res) => {
  try {
    await Question.create(req.body);
    res.status(201).json({ message: "Question added" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add question", error: err.message });
  }
});

// ✅ GET all questions for admin
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch questions" });
  }
});


// Approve submission
router.put("/approve/:id", verifyAdmin, async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate(
      req.params.id,
      { approved: true, rejected: false },
      { new: true }
    ).populate("user");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: submission.user.email,
      subject: "🎉 Interview Assessment Approved",
      html: `<h3>Hello ${submission.user.name},</h3>
             <p>✅ You have been <b>Approved</b> in the Interview Assessment.</p>
             <p><b>Score:</b> ${submission.score} / ${submission.totalQuestions}</p>
             <p>Regards,<br/>Zylen Team</p>`,
    });

    res.json({ message: "Approved and email sent!" });
  } catch (err) {
    res.status(500).json({ message: "Approval failed", error: err.message });
  }
});

// Reject submission
router.put("/reject/:id", verifyAdmin, async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate(
      req.params.id,
      { rejected: true, approved: false },
      { new: true }
    ).populate("user");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: submission.user.email,
      subject: "❌ Interview Assessment Result",
      html: `<h3>Hello ${submission.user.name},</h3>
             <p>We regret to inform you that you have <b>Not Passed</b> the Interview Assessment.</p>
             <p><b>Score:</b> ${submission.score} / ${submission.totalQuestions}</p>
             <p>Better luck next time!<br/>Zylen Team</p>`,
    });

    res.json({ message: "Rejected and email sent!" });
  } catch (err) {
    res.status(500).json({ message: "Rejection failed", error: err.message });
  }
});

// ✅ GET /api/admin/submissions - with user name & email populated
router.get("/submissions", verifyAdmin, async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate("user", "name email") // ⬅️ This is the key line
      .sort({ submittedAt: -1 });

    res.json(submissions);
  } catch (err) {
    console.error("❌ Error fetching submissions:", err);
    res.status(500).json({ message: "Failed to get submissions" });
  }
});


module.exports = router;
