import { ScoreState } from './ScoreState.ts';
import { WinScore } from './WinScore.ts';
import { Score } from '../Score.ts';

export class FortyScore extends ScoreState {
    constructor() {
        super('40');
    }

    public isForty(): boolean {
        return true;
    }

    public setState(score: Score, other: Score): void {
        score.setState(new WinScore());
    }
}
