const express = require('express')
const router = express.Router()
const { addRow } = require('../controllers/classrooms.js')

router.post('/add-classroom', addRow);

module.exports = router;