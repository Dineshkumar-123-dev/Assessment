// routes/admin.js
const express = require("express");
const router = express.Router();
const Result = require("../models/result.model");
const adminAuth = require("../middleware/adminAuth");
const nodemailer = require("nodemailer");

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// GET all submitted assessments
router.get("/assessments", adminAuth, async (req, res) => {
  const results = await Result.find().populate("user");
  res.json(results);
});

// PATCH Accept/Reject result
router.patch("/assessment/:id", adminAuth, async (req, res) => {
  const { status } = req.body; // "accepted" or "rejected"
  const result = await Result.findById(req.params.id).populate("user");

  if (!result) return res.status(404).json({ message: "Result not found" });

  result.status = status;
  await result.save();

  // Send email to user
  const subject = status === "accepted" ? "Assessment Result - Passed" : "Assessment Result - Not Passed";
  const text =
    status === "accepted"
      ? "✅ Congratulations! You have successfully passed the interview assessment."
      : "❌ Sorry! You have not passed the interview assessment.";

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: result.user.email,
    subject,
    text,
  });

  res.json({ message: `Assessment ${status} and email sent.` });
});

module.exports = router;
