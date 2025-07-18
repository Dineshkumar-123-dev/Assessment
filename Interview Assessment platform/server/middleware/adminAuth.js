const jwt = require("jsonwebtoken");

const ADMIN_EMAIL = "Admin123@gmail.com";

const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user is admin by role or email
    if (decoded.role !== "admin" && decoded.email !== ADMIN_EMAIL) {
      return res.status(403).json({ message: "Access denied: Not an admin" });
    }

    req.user = decoded; // Add decoded user to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = adminAuth;
