import { PRIME_NUMBERS, PROGRESSION_LENGTH, SIGNS } from './constants.js';
import GCD from './games/gcd.js';
import getProgression from './games/progression.js';
import { getRandomDigit, getRandomSign } from './random.js';

export const getQAndAEven = () => {
  const question = getRandomDigit(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export const getQAndACalc = () => {
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

export const getQAndAGcd = () => {
  const firstDigit = getRandomDigit(100);
  const secondDigit = getRandomDigit(100);
  const question = `${firstDigit} ${secondDigit}`;
  const answer = GCD(firstDigit, secondDigit);
  return [question, String(answer)];
};

export const getQAndAProgression = () => {
  const progression = getProgression(PROGRESSION_LENGTH);
  const hidenIndex = getRandomDigit(PROGRESSION_LENGTH);
  const question = progression.map((el, i) => (i === hidenIndex ? '..' : el)).join(' ');
  const answer = progression[hidenIndex];
  return [question, String(answer)];
};

export const getQAndAPrime = () => {
  const question = getRandomDigit(1000);
  const answer = PRIME_NUMBERS.includes(question) ? 'yes' : 'no';
  return [question, answer];
};
