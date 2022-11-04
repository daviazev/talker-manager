// https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check
const dateValidation = (date) => {
  const regex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;

  if (date.match(regex)) {
    return true;
  }

  return false;
};

const validwatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;

  if (!watchedAt || watchedAt === '') {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!dateValidation(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  return next();
};

// https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
const rateValidation = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;

  if (rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  if ((rate < 1 || rate > 5) || rate % 1 !== 0) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  return next();
};

const validateTalk = async (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }

  return next();
};
  
module.exports = { validateTalk, validwatchedAt, rateValidation };
