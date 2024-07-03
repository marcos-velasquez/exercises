import assert from 'assert';
import { Move } from './Move.ts';
import { Player } from './Player.ts';

export class Game {
    constructor(
        public readonly firstPlayer: Player,
        public readonly secondPlayer: Player
    ) {}

    public calculate(moves: Array<Array<Move>>): string {
        assert(moves.length > 0 && moves.every((move) => move.length > 0));

        moves.forEach(([firstPlayerMove, secondPlayerMove]) => {
            if (firstPlayerMove.vs(secondPlayerMove)) {
                this.firstPlayer.incrementScore();
            } else if (secondPlayerMove.vs(firstPlayerMove)) {
                this.secondPlayer.incrementScore();
            }
        });

        return this.getWinnerName();
    }

    private getWinnerName(): string {
        if (this.firstPlayer.isScoreHigherThan(this.secondPlayer)) {
            return this.firstPlayer.name;
        } else if (this.secondPlayer.isScoreHigherThan(this.firstPlayer)) {
            return this.secondPlayer.name;
        } else {
            return 'Tie';
        }
    }
}
