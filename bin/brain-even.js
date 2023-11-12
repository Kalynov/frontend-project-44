#!/usr/bin/env node
import { cli } from '../src/cli.js'
import { mainGame } from '../src/mainGame.js';
import { getQAndAEven } from '../src/questionsAndAnswers.js';

const name = cli();
console.log('Answer "yes" if the number is even, otherwise answer "no"');

mainGame(name, getQAndAEven);


