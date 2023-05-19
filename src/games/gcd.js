import { getGcd, getRandomNumber } from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameQuestion = () => {
  const num1 = getRandomNumber(101);
  const num2 = getRandomNumber(101);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestion };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
