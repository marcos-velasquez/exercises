import { ScoreState } from './ScoreState.ts';
import { FifteenScore } from './FifteenScore.ts';
import { Score } from '../Score.ts';

export class LoveScore extends ScoreState {
    constructor() {
        super('love');
    }

    public setState(score: Score): void {
        score.setState(new FifteenScore());
    }
}
