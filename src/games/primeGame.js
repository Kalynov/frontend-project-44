import { PRIME_NUMBERS } from '../constants.js';
import { getRandomDigit } from '../random.js';
import runMainGame from './runMainGame.js';

const getQAndAPrime = () => {
  const question = getRandomDigit(1000);
  const answer = PRIME_NUMBERS.includes(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrimeGame = () => {
  const firstQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runMainGame(getQAndAPrime, firstQuestion);
};

export default runPrimeGame;
