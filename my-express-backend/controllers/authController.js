// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../models/user');

const secretKey = 'web';

// Регистрация пользователя
exports.register = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  users.push({ username, password: hashedPassword });
  console.log(users);
  res.status(201).json({ message: 'User registered successfully' });
};

// Логин пользователя
exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const accessToken = jwt.sign({ uid: user.username }, secretKey, {
    expiresIn: 86400 // 24 часа
  });

  res.status(200).json({ auth: true, accessToken });
};

// Проверка токена
exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }

    req.userId = decoded.id;
    next();
  });
};
