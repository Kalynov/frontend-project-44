import { getRandomDigit } from '../random.js';
import runMainGame from './runMainGame.js';

function GCD(firstNumber, secondNumber) { // НОД двух целых чисел
  let gcd = firstNumber;
  let b = secondNumber;
  for (let i = 1; i < 2; i += 1) {
    while (gcd && b) {
      if (gcd > b) {
        gcd %= b;
      } else {
        b %= gcd;
      }
    }
    gcd += b;
  }
  return gcd;
}

const getQAndAGcd = () => {
  const firstDigit = getRandomDigit(100);
  const secondDigit = getRandomDigit(100);
  const question = `${firstDigit} ${secondDigit}`;
  const answer = GCD(firstDigit, secondDigit);
  return [question, String(answer)];
};

const runGCDGame = () => {
  const firstQuestion = 'Find the greatest common divisor of given numbers.';
  runMainGame(getQAndAGcd, firstQuestion);
};

export default runGCDGame;
