const { getAllTalkers } = require('../funcs');

const existingId = async (req, res, next) => {
  const { id } = req.params;
  const result = await getAllTalkers();
  
  if (result.some((talker) => talker.id === Number(id))) {
    return next();
  }

  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
};

module.exports = existingId;
