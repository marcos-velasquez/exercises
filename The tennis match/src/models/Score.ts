import { LoveScore } from './scores/LoveScore.ts';
import { ScoreState } from './scores/ScoreState.ts';

export class Score {
    private state: ScoreState = new LoveScore();

    public setState(state: ScoreState) {
        this.state = state;
    }

    public next(other: Score) {
        return this.state.setState(this, other);
    }

    public isForty(): boolean {
        return this.state.isForty();
    }

    public isDeuce(): boolean {
        return this.state.isDeuce();
    }

    public isAdvantage(): boolean {
        return this.state.isAdvantage();
    }

    public isWin(): boolean {
        return this.state.isWin();
    }

    public value(): string {
        return this.state.value;
    }

    public static create() {
        return new Score();
    }
}
