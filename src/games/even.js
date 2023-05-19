import { getRandomNumber, isEven } from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestion = () => {
  const question = getRandomNumber(101);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestion };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
