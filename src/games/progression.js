import { getProgression, getRandomNumber } from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getProgressionWithHiddenElement = (progression, hiddenIdx) => {
  const answer = progression[hiddenIdx];
  const modifiedProgression = [...progression];
  modifiedProgression[hiddenIdx] = '..';

  return [modifiedProgression.join(' '), String(answer)];
};

const getGameQuestion = () => {
  const start = getRandomNumber(51);
  const delta = getRandomNumber(21);
  const numOfElems = 10;
  const progression = getProgression(start, delta, numOfElems);
  const hiddenIdx = getRandomNumber(progression.length);
  const [question, correctAnswer] = getProgressionWithHiddenElement(progression, hiddenIdx);

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestion };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
