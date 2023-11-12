import readlineSync from 'readline-sync';
import { WINCOUNT } from './constants.js';


export const mainGame = (name, getQAndA) => {

    let counter = 0;

    do {
        const [question, rightAnswer] = getQAndA();
        console.log("Question: " + question)
    
        const usersAnswer = readlineSync.question('Your answer: '); 
        if (usersAnswer !== rightAnswer){
            counter = 0;
            console.log(usersAnswer + " is wrong answer ;(. Correct answer was " + rightAnswer + ".");
            console.log("Let's try again, " + name);
        } else {
            console.log("Correct!");
            counter++
        }
        
    } while (counter < WINCOUNT);
    
    console.log("Congratulations, " + name + "!");
}


