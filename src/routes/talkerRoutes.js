const express = require('express');

const router = express.Router();

const { getAllTalkers } = require('../funcs');

router.get('/', async (req, res) => {
  try {
    const result = await getAllTalkers();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = router;