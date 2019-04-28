var player = require('./player.js');
var game = require('./game.js');

console.log('Starting Multimath with CommonJS format: SystemJS loader');

// add click handler to start game button
document.getElementById('startGame').addEventListener('click', function () {
    player.setName(document.getElementById('playername').value);
    game.printGame();
});

// add click handler to calculate store button
document.getElementById('calculate').addEventListener('click', function () {
    game.calculateScore();
});

// set default number of problems.
document.getElementById('problemCount').value = game.getProblemCount();
