const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  domain: { type: String, required: true },
  questionText: { type: String, required: true },
  options: {
    A: String,
    B: String,
    C: String,
    D: String,
  },
  correctAnswer: String,
});

// ✅ This ensures uniqueness within each domain, not globally
questionSchema.index({ domain: 1, questionText: 1 }, { unique: true });

module.exports = mongoose.model("Question", questionSchema);
