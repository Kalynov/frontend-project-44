#!/usr/bin/env node
import cli from '../src/cli.js';
import mainGame from '../src/games/mainGame.js';
import { getQAndAPrime } from '../src/questionsAndAnswers.js';

const name = cli();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

mainGame(name, getQAndAPrime);
