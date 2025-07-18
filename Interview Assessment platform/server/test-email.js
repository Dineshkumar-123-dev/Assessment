// test-mail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

(async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "yourtestmail@gmail.com", // use your own email to test
      subject: "Test Email",
      text: "This is a test email from Interview Assessment app."
    });
    console.log("✅ Mail sent:", info.messageId);
  } catch (error) {
    console.error("❌ Email failed:", error.message);
  }
})();

