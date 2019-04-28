var playerName = '';

function logPlayer() {
    console.log('The current player is : ' + playerName + ' ');
}

function setName(name) {
    playerName = name;
}

function getName() {
    return playerName;
}

module.exports = {
    logPlayer: logPlayer,
    getName: getName,
    setName: setName
};