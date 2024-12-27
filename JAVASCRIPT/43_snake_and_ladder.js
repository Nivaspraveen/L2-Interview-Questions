// 43. To implement snake and ladder game for given two-dimensional array having positionof snakes and ladders

class SnakeAndLadder {
    constructor(size, snakes, ladders) {
        this.size = size;
        this.snakes = new Map(snakes);
        this.ladders = new Map(ladders);
        this.playerPositions = [1, 1];
        this.currentPlayer = 0;
        this.startGame = [false, false];
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    movePlayer(player) {
        let diceValue = this.rollDice();
        console.log(`Player ${player + 1} rolled: ${diceValue}`);

        if (!this.startGame[player]) {
            if (diceValue === 1) {
                this.startGame[player] = true;
                this.playerPositions[player] = 1;
                console.log(`Player ${player + 1} starts the game and moves to position 1`);
            } 
            else console.log(`Player ${player + 1} needs to roll a 1 to start!`);
            return;
        }

        let newPosition = this.playerPositions[player] + diceValue;

        if (newPosition > this.size) { 
            let neededValue = this.size - this.playerPositions[player]; 
            console.log(`Player ${player + 1} needs to roll a ${neededValue} to win!`); 
            return;
        }

        if (newPosition > this.size) newPosition = this.playerPositions[player];
        else {
            if (this.snakes.has(newPosition)) {
                newPosition = this.snakes.get(newPosition);
                console.log(`Player ${player + 1} encountered a snake! Moved to: ${newPosition}`);
            } else if (this.ladders.has(newPosition)) {
                newPosition = this.ladders.get(newPosition);
                console.log(`Player ${player + 1} climbed a ladder! Moved to: ${newPosition}`);
            }
        }

        this.playerPositions[player] = newPosition;
        console.log(`Player ${player + 1} moved to: ${newPosition}`);

        if (newPosition === this.size) {
            console.log(`Player ${player + 1} wins!`);
            return true;
        }
        
        if (diceValue === 6) {
            console.log(`Player ${player + 1} rolls again!`);
            this.movePlayer(player);
        }
    }

    playGame() {
        let gameEnd = false;
        while (!gameEnd) {
            gameEnd = this.movePlayer(this.currentPlayer);
            this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
        }
    }
}

const snakes = [
    [30, 3], [36, 6], [52, 11], [60, 21], [68, 34], [76, 41], [83, 19],
    [90, 48], [94, 56], [96, 31], [98, 45]
];
const ladders = [
    [6, 33], [23, 77], [44, 95], [50, 99], [62, 80], [74, 92], [88, 93], 
]

const game = new SnakeAndLadder(100, snakes, ladders);
game.playGame();