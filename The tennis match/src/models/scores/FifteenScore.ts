import { ScoreState } from './ScoreState.ts';
import { ThirtyScore } from './ThirtyScore.ts';
import { Score } from '../Score.ts';

export class FifteenScore extends ScoreState {
    constructor() {
        super('15');
    }

    public setState(score: Score): void {
        score.setState(new ThirtyScore());
    }
}
