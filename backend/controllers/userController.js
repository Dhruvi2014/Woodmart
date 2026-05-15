const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "supersecretkey123", {
    expiresIn: "30d",
  });
};

const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  User.findByEmail(email, async (err, user) => {
    if (err) return res.status(500).json({ message: "Server error" });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    User.create(name, email, hashedPassword, (err, result) => {
      if (err) return res.status(500).json({ message: "Error registering user" });
      
      User.findByEmail(email, (err, newUser) => {
        if (err || !newUser) return res.status(500).json({ message: "Server error" });
        res.status(201).json({
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          token: generateToken(newUser.id),
        });
      });
    });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  User.findByEmail(email, async (err, user) => {
    if (err) return res.status(500).json({ message: "Server error" });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  });
};

module.exports = {
  registerUser,
  loginUser,
};
