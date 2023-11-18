#!/usr/bin/env node
import { cli } from '../src/cli.js'
import { mainGame } from '../src/games/mainGame.js';
import { getQAndAGcd } from '../src/questionsAndAnswers.js';

const name = cli()
console.log('Find the greatest common divisor of given numbers.');

mainGame(name, getQAndAGcd);