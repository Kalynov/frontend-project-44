#!/usr/bin/env node
import { cli } from '../src/cli.js'
import { mainGame } from '../src/mainGame.js';
import { getQAndACalc } from '../src/questionsAndAnswers.js';

const name = cli()
console.log('What is the result of the expression?');

mainGame(name, getQAndACalc);