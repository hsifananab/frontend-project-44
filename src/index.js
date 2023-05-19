import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const printWelcomeMessage = () => console.log('Welcome to the Brain Games!');

const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const printGameRules = (gameRules) => console.log(gameRules);

const playRound = (getGameQuestion) => {
  const { question, correctAnswer } = getGameQuestion();
  console.log(`Question: ${question}`);

  const playerAnswer = readlineSync.question('Your answer: ');
  return playerAnswer === correctAnswer;
};

const runEngine = (gameData) => {
  printWelcomeMessage();
  const playerName = getPlayerName();
  printGameRules(gameData.gameRules);

  let isWinner = true;
  for (let i = 1; i <= NUMBER_OF_ROUNDS; i += 1) {
    if (!playRound(gameData.getGameQuestion)) {
      isWinner = false;
      break;
    }
    console.log('Correct!');
  }

  if (isWinner) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default runEngine;
