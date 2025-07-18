// utils/sendVerificationEmail.js
const nodemailer = require("nodemailer");

const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const verificationURL = `${process.env.CLIENT_URL}/verify/${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your Email - Interview Assessment",
    html: `
      <h3>Welcome to Interview Assessment Platform</h3>
      <p>Click below to verify your email:</p>
      <a href="${verificationURL}">${verificationURL}</a>
      <p>If you didn’t request this, please ignore this email.</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("✅ Verification email sent:", info.messageId);

  console.log("📧 Sending verification email to:", email);
  console.log("🔗 Link:", verificationURL);

};

module.exports = sendVerificationEmail;
