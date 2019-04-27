define(["./player", "./game"], function(player, game) {

    console.log('Starting Multimath with AMD format: RequireJS loader');
    
    // add click handler to start game button
    document.getElementById('startGame').addEventListener('click', function() {
        player.setName(document.getElementById('playername').value);
        game.printGame();
    });

    // add click handler to calculate store button
    document.getElementById('calculate').addEventListener('click', function() {
        game.calculateScore();
    });

    // set default number of problems.
    document.getElementById('problemCount').value = game.getProblemCount();
});