function play(name, isTurn) {
  if (isTurn) {
    console.log(`${name} is now playing!`);
  }
}

const player1 = {
  name: 'Ashley',
  color: 'purple',
  isTurn: true,
  play,
};

const player2 = {
  name: 'Guil',
  color: 'red',
  isTurn: false,
  play,
};

player1.isTurn = true;
player2['isTurn'] = true;

player1.play(player1.name, player1.isTurn);
player2.play(player2.name, player2.isTurn);
