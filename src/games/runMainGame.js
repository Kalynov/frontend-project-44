import readlineSync from 'readline-sync';
import { WINCOUNT } from '../constants.js';

const runMainGame = (getQAndA, firstQuestion) => {
  let counter = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (typeof getQAndA !== 'function') {
    return;
  }

  console.log(firstQuestion);
  do {
    const [question, rightAnswer] = getQAndA();
    console.log(`Question: ${question}`);

    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== rightAnswer) {
      counter = 0;
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      counter += 1;
    }
  } while (counter < WINCOUNT);

  if (counter === WINCOUNT) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runMainGame;
