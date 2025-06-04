const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);

// example of a protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to protected route', userId: req.user.userId });
});

module.exports = router;
