const jwt = require("jsonwebtoken");

// This middleware checks the Authorization header for a valid JWT.
// If valid, it attaches the decoded user info to req.user and calls next().
// If missing/invalid, it stops the request with a 401 response.
function protect(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, name, email }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token invalid" });
  }
}

module.exports = { protect };
