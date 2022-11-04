const express = require('express');

const router = express.Router();

const { generateToken } = require('../funcs');

const validateLogin = require('../middlewares/validateLogin');

router.post('/', validateLogin, async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = router;