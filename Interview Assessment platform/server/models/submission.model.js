const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // ✅ Required for populate to work
    required: true,
  },
  domain: String,
  score: Number,
  totalQuestions: Number,
  responses: [
    {
      question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      selectedAnswer: String,
      isCorrect: Boolean,
    },
  ],
  passed: {
    type: Boolean,
    default: false,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  rejected: {
    type: Boolean,
    default: false,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Submission", submissionSchema);
