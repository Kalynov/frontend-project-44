import { getRandomDigit } from '../random.js';

const getProgression = (length) => {
  const firstNumber = getRandomDigit(100);
  const step = getRandomDigit(10) + 1; // for extension zerro
  const progression = [firstNumber];
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

export default getProgression;
