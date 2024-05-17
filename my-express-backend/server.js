// server.js
const express = require('express');
const app = express();
const port = 8080;
const authRoutes = require('./routes/auth');

app.use(express.json());

// Использование маршрутов
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
