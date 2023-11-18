import { SIGNS } from './constants.js';

export const getRandomDigit = (max) => Math.floor(Math.random() * max);

export const getRandomSign = () => {
  const index = getRandomDigit(3);
  return SIGNS[index];
};
