// routes.js
const express = require('express');
const User = require('./models/userModel');
const Chat = require('./models/chatModel');

const router = express.Router();

router.post('/login', async (req, res) => {
  // Login logic
});

router.post('/chat', async (req, res) => {
  // Chat logic
});

module.exports = router;