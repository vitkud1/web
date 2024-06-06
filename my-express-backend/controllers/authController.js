// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../models/users');

const secretKey = 'web';

// Регистрация пользователя
const register = async (req, res) => {
  const { username, phone, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'Email already in use' });
    } else {
      const newUser = await User.create({ username, email, password });
      res.status(201).json({ message: 'Registration successful', user: newUser });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Логин пользователя
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// exports.verifyToken = (req, res, next) => {
//   const token = req.headers['x-access-token'];

//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(500).json({ message: 'Failed to authenticate token' });
//     }

//     req.userId = decoded.id;
//     next();
//   });
// };
module.exports = {
  login,
  register
};