// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const checkEmail = (email) => {
  if (!email) {
    return 'O campo "email" é obrigatório';
  } 
      
  if (!validateEmail(email)) {
   return 'O "email" deve ter o formato "email@email.com"';
  }

  return 'ok';
};

const checkPassword = (password) => {
  if (!password || password === '') {
    return 'O campo "password" é obrigatório';
  }

  if (password.length < 6) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }

  return 'ok';
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const valid1 = checkEmail(email);
  const valid2 = checkPassword(password);

  if (valid1 !== 'ok') {
    return res.status(400).json({ message: valid1 });
  }

  if (valid2 !== 'ok') {
    return res.status(400).json({ message: valid2 });
  }

  return next();
};

module.exports = validateLogin;