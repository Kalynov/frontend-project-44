import { getRandomDigit } from '../random.js';
import runMainGame from './runMainGame.js';

const getQAndAEven = () => {
  const question = getRandomDigit(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => {
  const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
  runMainGame(getQAndAEven, firstQuestion);
};

export default runEvenGame;
