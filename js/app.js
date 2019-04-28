import assignPlayerName from './player.js';
import {printGame, calculateScore, getProblemCount} from './game.js';

console.log('Built with webpack and babel-loader');

// add click handler to start game button
document.getElementById('startGame').addEventListener('click', function () {
    assignPlayerName(document.getElementById('playername').value);
    printGame();
});

// add click handler to calculate store button
document.getElementById('calculate').addEventListener('click', function () {
    calculateScore();
});

// set default number of problems.
document.getElementById('problemCount').value = getProblemCount();
