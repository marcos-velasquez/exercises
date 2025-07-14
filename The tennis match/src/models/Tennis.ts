import assert from 'assert';
import { Player } from './Player.ts';

export class Tennis {
    private readonly history = new Array<string[]>();

    private constructor(
        private readonly firstPlayer: Player,
        private readonly secondPlayer: Player
    ) {}

    public play(sequence: string[]): string[][] {
        assert(sequence.every((value) => this.firstPlayer.isName(value) || this.secondPlayer.isName(value)));
        this.register();
        let mathIndex = 0;
        do {
            const player = this.getPlayer(sequence[mathIndex]);
            player.next(this.getOtherPlayer(player));
            this.register();
            mathIndex++;
        } while (!this.hasWinner() && mathIndex < sequence.length);
        return this.history;
    }

    private getPlayer(name: string) {
        return this.firstPlayer.isName(name) ? this.firstPlayer : this.secondPlayer;
    }

    private getOtherPlayer(player: Player) {
        return player.isName(this.firstPlayer.name) ? this.secondPlayer : this.firstPlayer;
    }

    private hasWinner() {
        return this.firstPlayer.isWin() || this.secondPlayer.isWin();
    }

    private register() {
        this.history.push([this.firstPlayer.value, this.secondPlayer.value]);
    }

    public static create(firstPlayer: string, secondPlayer: string) {
        return new Tennis(new Player(firstPlayer), new Player(secondPlayer));
    }
}
