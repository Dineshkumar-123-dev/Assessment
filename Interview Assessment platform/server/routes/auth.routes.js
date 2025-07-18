const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const sendVerificationEmail = require("../utils/sendVerificationEmail");
const authMiddleware = require("../middleware/authMiddleware");

// 🔐 Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password, mobileno, country } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      mobileno,
      country,
      isVerified: false,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    await sendVerificationEmail(email, token);

    res.status(200).json({ message: "Signup successful! Please verify your email." });
  } catch (err) {
    console.error("❌ Signup error:", err.message);
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// ✅ Email Verification Route
router.get("/verify/:token", async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(400).send("Invalid token");

    if (user.isVerified) {
      return res.send("✅ Email already verified. You can login now.");
    }

    user.isVerified = true;
    await user.save();

    res.send("🎉 Email verified successfully. You can login now.");
  } catch (err) {
    res.status(400).send("❌ Invalid or expired token");
  }
});

// 🔓 Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (!user.isVerified) {
      return res.status(401).json({ message: "Please verify your email first" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const role = email.toLowerCase() === "admin123@gmail.com" ? "admin" : "user";

    const token = jwt.sign(
      { id: user._id, role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      token,
      role,
      name: user.name,
      email: user.email,
      mobileno: user.mobileno,
      country: user.country,
    });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// 👤 User Profile Route
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to get user profile" });
  }
});

module.exports = router;
