const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Регистрация пользователя
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Хеширование пароля перед сохранением
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Создание нового пользователя:', { username, email, hashedPassword });

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user: newUser });
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
    res.status(500).json({ message: 'Ошибка при регистрации пользователя', error });
  }
});

module.exports = router;
