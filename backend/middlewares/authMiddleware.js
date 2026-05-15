const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecretkey123");

      User.findByEmail(decoded.email, (err, user) => {
        if (!err && user) {
           req.user = user;
           next();
        } else {
           res.status(401).json({ message: "Not authorized, token failed" });
        }
      });
      
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
