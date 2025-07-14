export class Player {
    private score = 0;

    constructor(public readonly name: string) {}

    public incrementScore(): void {
        this.score++;
    }

    public isScoreHigherThan(player: Player): boolean {
        return this.score > player.score;
    }
}
