const express = require('express');

const router = express.Router();

const { getAllTalkers, getTalkerById } = require('../funcs');
const existingId = require('../middlewares/existingId');

router.get('/', async (req, res) => {
  try {
    const result = await getAllTalkers();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.get('/:id', existingId, async (req, res) => {
  const { id } = req.params;
  const talker = await getTalkerById(Number(id));
  res.status(200).json(talker);
});

module.exports = router;