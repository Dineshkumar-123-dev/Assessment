const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail.util");
const crypto = require("crypto");

exports.signup = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const token = crypto.randomBytes(32).toString("hex");

  const user = new User({ name, email, password: hashedPassword, verificationToken: token });
  await user.save();

  const link = `${process.env.CLIENT_URL}/verify?token=${token}`;
  await sendEmail(email, "Verify your email", `<a href='${link}'>Click to verify</a>`);
  return "Signup successful. Verification email sent.";
};

exports.verifyEmail = async (token) => {
  const user = await User.findOne({ verificationToken: token });
  if (!user) throw new Error("Invalid or expired token");
  user.isVerified = true;
  user.verificationToken = "";
  await user.save();
  return "Email verified successfully.";
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !user.isVerified) throw new Error("Invalid credentials or email not verified");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Incorrect password");

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return { token, role: user.role };
};
