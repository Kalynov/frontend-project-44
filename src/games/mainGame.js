import readlineSync from 'readline-sync';
import { WINCOUNT } from '../constants.js';

const mainGame = (name, getQAndA) => {
  let counter = 0;

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

export default mainGame;
