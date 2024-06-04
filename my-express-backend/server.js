// server.js
const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth');
const cors = require('cors')
app.use(express.json());
app.use(cors({ origin: 'http://localhost:8080' }))

// Использование маршрутов
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
