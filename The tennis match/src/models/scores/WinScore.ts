import { ScoreState } from './ScoreState.ts';
import { Score } from '../Score.ts';

export class WinScore extends ScoreState {
    constructor() {
        super('win');
    }

    public isWin(): boolean {
        return true;
    }

    public setState(score: Score): void {
        score.setState(this);
    }
}
