import { getRandomNumber, isPrime } from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameQuestion = () => {
  const question = getRandomNumber(51);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestion };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
