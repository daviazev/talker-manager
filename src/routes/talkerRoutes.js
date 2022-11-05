const express = require('express');

const router = express.Router();

const { 
  getAllTalkers, getTalkerById, addNewTalker, updateTalker, removeTalker, searchTerm,
} = require('../funcs');

const existingId = require('../middlewares/existingId');
const auth = require('../middlewares/auth');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const { validateTalk, validwatchedAt, rateValidation } = require('../middlewares/validateTalk');

router.get('/search', auth, async (req, res) => {
  const { q } = req.query;
  const response = await searchTerm(q);
  res.status(200).json(response);
});

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

router.put('/:id', 
    auth, 
    validateName,
    validateAge,
    validateTalk,
    validwatchedAt,
    rateValidation,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const { id } = req.params;

    const talkerUpdated = await updateTalker({ name, age, talk }, Number(id));
    res.status(200).json(talkerUpdated);
});

router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;

  await removeTalker(Number(id));
  return res.status(204).json();
});

module.exports = router;
