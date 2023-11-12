#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { cli } from '../src/cli.js'

const name = cli()
console.log('Answer "yes" if the number is even, otherwise answer "no"');

let counter = 0;

do {
    let randomNumber = Math.floor(Math.random() * 100);
    let rightAnswer = randomNumber%2 === 0 ? "yes" : "no";
    console.log("Question: " + randomNumber)

    const usersAnswer = readlineSync.question('Answer: '); 
    if (usersAnswer !== rightAnswer){
        counter = 0;
        console.log(usersAnswer + " is wrong answer ;(. Correct answer was " + rightAnswer + ".");
        console.log("Let's try again, " + name);
    } else {
        console.log("Correct!");
        counter++
    }
    
} while (counter < 3);

console.log("Congratulations, " + name + "!");


