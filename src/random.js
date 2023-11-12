import { SIGNS } from "./constants.js";

export const getRandomDigit = (max) => {
    return Math.floor(Math.random() * max);
}

export const getRandomSign = () => {
    
    let index = getRandomDigit(3);
    return SIGNS[index];
}

