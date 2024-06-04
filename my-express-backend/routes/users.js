const express = require('express')
const router = express.Router()
const { addRow, getAllUsers } = require('../controllers/users');

router.post('/add-user', addRow);
router.get('/get-users', getAllUsers);

module.exports = router;

