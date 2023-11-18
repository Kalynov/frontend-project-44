#!/usr/bin/env node
import cli from '../src/cli.js';
import mainGame from '../src/games/mainGame.js';
import { getQAndAProgression } from '../src/questionsAndAnswers.js';

const name = cli();
console.log('What number is missing in the progression?');

mainGame(name, getQAndAProgression);
