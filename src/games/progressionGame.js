import { PROGRESSION_LENGTH } from '../constants.js';
import { getRandomDigit } from '../random.js';
import runMainGame from './runMainGame.js';

const getProgression = (length) => {
  const firstNumber = getRandomDigit(100);
  const step = getRandomDigit(10) + 1; // for extension zerro
  const progression = [firstNumber];
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const getQAndAProgression = () => {
  const progression = getProgression(PROGRESSION_LENGTH);
  const hidenIndex = getRandomDigit(PROGRESSION_LENGTH);
  const question = progression.map((el, i) => (i === hidenIndex ? '..' : el)).join(' ');
  const answer = progression[hidenIndex];
  return [question, String(answer)];
};

const runProgressionGame = () => {
  const firstQuestion = 'What number is missing in the progression?';
  runMainGame(getQAndAProgression, firstQuestion);
};

export default runProgressionGame;
