// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authController.verifyToken, (req, res) => {
  res.status(200).json({ message: 'Authenticated', userId: req.userId });
});

module.exports = router;
