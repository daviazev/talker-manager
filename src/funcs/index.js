const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');
const crypto = require('crypto');
const path = require('path');

const PATH_TO_FILE = '../talker.json';

const readTalkerFile = async () => {
  try {
    const content = await readFile(join(__dirname, PATH_TO_FILE), 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

const getAllTalkers = async () => {
  const talkers = await readTalkerFile();
  return talkers;
};

const getTalkerById = async (id) => {
  const talkers = await readTalkerFile();
  return talkers.find(((talker) => talker.id === id));
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

const addNewTalker = async ({ name, age, talk }) => {
  const talkers = await readTalkerFile();

  const newTalker = {
    name,
    age,
    id: talkers.length + 1,
    talk,
  };

  const allTalkers = JSON.stringify([...talkers, newTalker]);
  await writeFile(path.resolve(__dirname, PATH_TO_FILE), allTalkers);
  return newTalker;
};

const updateTalker = async ({ name, age, talk }, id) => {
  const talkers = await readTalkerFile();

  const updating = talkers.map((obj) => {
    if (obj.id === id) return { id, name, age, talk };

    return obj;
  });

  await writeFile(path.resolve(__dirname, PATH_TO_FILE), JSON.stringify(updating));
  return updating.find((obj) => obj.id === id);
};

const removeTalker = async (id) => {
  const talkers = await readTalkerFile();

  const result = talkers.filter((talker) => talker.id !== id);
  await writeFile(path.resolve(__dirname, PATH_TO_FILE), JSON.stringify(result));
};

const searchTerm = async (query) => {
  const talkers = await readTalkerFile();

  const search = talkers.filter((obj) => obj.name.includes(query));
  
  return search;
};

module.exports = { 
  getAllTalkers,
  getTalkerById,
  generateToken,
  addNewTalker,
  updateTalker,
  removeTalker,
  searchTerm,
};
