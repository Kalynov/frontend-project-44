import { SIGNS } from '../constants.js';
import { getRandomDigit, getRandomSign } from '../random.js';
import runMainGame from './runMainGame.js';

const getQAndACalc = () => {
  const firstDigit = getRandomDigit(10);
  const secondDigit = getRandomDigit(10);
  const sign = getRandomSign();
  const question = `${firstDigit} ${sign} ${secondDigit}`;
  let rightAnswer;
  switch (sign) {
    case SIGNS[0]: // +
      rightAnswer = firstDigit + secondDigit;
      break;
    case SIGNS[1]: // -
      rightAnswer = firstDigit - secondDigit;
      break;
    case SIGNS[2]: // *
      rightAnswer = firstDigit * secondDigit;
      break;
    default:
      rightAnswer = 0;
  }
  return [question, String(rightAnswer)];
};

const runCalcGame = () => {
  const firstQuestion = 'What is the result of the expression?';
  runMainGame(getQAndACalc, firstQuestion);
};

export default runCalcGame;
