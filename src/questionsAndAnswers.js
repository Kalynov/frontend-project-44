import { SIGNS } from "./constants.js";
import { getRandomDigit, getRandomSign } from "./random.js";

export const getQAndAEven = () => {
    let question = getRandomDigit(100);
    let answer = question % 2 === 0 ? "yes" : "no";
    return [question, answer]
}


export const getQAndACalc = () => {
    const firstDigit = getRandomDigit(10);
    const secondDigit = getRandomDigit(10);
    const sign = getRandomSign();
    let question = firstDigit + " " + sign + " " + secondDigit;
    let rightAnswer
    switch(sign) {
        case SIGNS[0]: // +
            rightAnswer = firstDigit + secondDigit;
            break;
        case SIGNS[1]: // -
            rightAnswer = firstDigit - secondDigit;
            break;
        case SIGNS[2]: // *
            rightAnswer = firstDigit * secondDigit;
            break;
    }
    return [question, String(rightAnswer)]
}