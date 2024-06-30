import { Score } from '../Score.ts';

export abstract class ScoreState {
    constructor(public readonly value: string) {}

    public isWin(): boolean {
        return false;
    }

    public isAdvantage(): boolean {
        return false;
    }

    public isDeuce(): boolean {
        return false;
    }

    public isForty(): boolean {
        return false;
    }

    public abstract setState(score: Score, other: Score): void;
}
