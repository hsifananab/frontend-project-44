import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../utils.js';

const numberOfRounds = 3;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestion = () => {
  const question = getRandomNumber(101);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestion };

const playRound = (currentRound, name) => {
  if (currentRound > numberOfRounds) {
    console.log(`Congratulations, ${name}!`);
    return true;
  }

  const { question, correctAnswer } = gameData.getGameQuestion();
  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');

    return playRound(currentRound + 1, name);
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  playRound(1, name);
};

export default runGame;
