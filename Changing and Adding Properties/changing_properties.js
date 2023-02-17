function play(name, isTurn) {
	if (isTurn) {
		console.log(`${name} is now playing!`);
	}
}

const player1 = {
	name: 'Ashley',
	color: 'purple',
	isTurn: true,
	play() {
		play(this.name, this.isTurn);
	},
};

const player2 = {
	name: 'Guil',
	color: 'red',
	isTurn: false,
	play() {
		play(this.name, this['isTurn']);
	},
};

player1.isTurn = true;
player2['isTurn'] = true;

player1.play();
player2.play();
