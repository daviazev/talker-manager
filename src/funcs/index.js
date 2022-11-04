const { readFile } = require('fs').promises;
const { join } = require('path');

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

module.exports = { 
  getAllTalkers,
  getTalkerById,
};
