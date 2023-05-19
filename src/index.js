import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const runEngine = (gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameData.gameRules);

  const playRound = (currentRound) => {
    if (currentRound > NUMBER_OF_ROUNDS) {
      return true;
    }

    const { question, correctAnswer } = gameData.getGameQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');

      return playRound(currentRound + 1);
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };

  const isWinner = playRound(1);

  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default runEngine;
