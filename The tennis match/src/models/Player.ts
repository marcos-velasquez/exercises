import { Score } from './Score.ts';

export class Player {
    private readonly score = new Score();

    constructor(public readonly name: string) {}

    public next(player: Player) {
        this.score.next(player.score);
    }

    public get value(): string {
        return this.score.value();
    }

    public isName(name: string): boolean {
        return this.name === name;
    }

    public isWin(): boolean {
        return this.score.isWin();
    }
}
