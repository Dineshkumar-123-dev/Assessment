const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();

// Middleware setup
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// DB connection
require("./config/db")();

// Routes
const authRoutes = require("./routes/auth.routes");
const questionRoutes = require("./routes/question.routes");
const adminRoutes = require("./routes/admin.routes");
const submissionRoutes = require("./routes/submission.routes");

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/submissions", submissionRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
