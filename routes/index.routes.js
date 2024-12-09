const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','views','home.html'))
});

router.get('/circuito', (req, res) => {
    res.sendFile(path.join(__dirname, '..','views','circuito.html'))
});

module.exports = router; 