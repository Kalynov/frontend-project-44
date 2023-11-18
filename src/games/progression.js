import { getRandomDigit } from "../random.js"

export const getProgression = (length) => {
    const firstNumber = getRandomDigit(100);
    const step = getRandomDigit(10) + 1;  // for extension zerro
    let progression = [firstNumber]
    for (let i = 1; i < length; i++) {
        progression.push(progression[i-1] + step);
    }
    return progression;
}