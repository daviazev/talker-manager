const express = require('express');

const router = express.Router();

const { getAllTalkers, getTalkerById, addNewTalker } = require('../funcs');
const existingId = require('../middlewares/existingId');
const auth = require('../middlewares/auth');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const { validateTalk, validwatchedAt, rateValidation } = require('../middlewares/validateTalk');

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

router.post('/', 
    auth, 
    validateName,
    validateAge,
    validateTalk,
    validwatchedAt,
    rateValidation,
  async (req, res) => {
   const { name, age, talk } = req.body;

   const newTalker = await addNewTalker({ name, age, talk });

   res.status(201).json(newTalker);
});

module.exports = router;