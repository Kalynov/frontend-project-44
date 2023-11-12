#!/usr/bin/env node
import { cli } from '../src/cli.js'
import { mainGame } from '../src/mainGame.js';
import { getQAndAProgression } from '../src/questionsAndAnswers.js';

const name = cli()
console.log('Find the greatest common divisor of given numbers.');

mainGame(name, getQAndAProgression);