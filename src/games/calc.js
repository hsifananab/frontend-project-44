import { getRandomNumber } from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calcExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getGameQuestion = () => {
  const num1 = getRandomNumber(101);
  const num2 = getRandomNumber(11);
  const operator = operators[getRandomNumber(operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calcExpression(num1, num2, operator));

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestion };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
