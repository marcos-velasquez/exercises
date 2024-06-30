import { ScoreState } from './ScoreState.ts';
import { FortyScore } from './FortyScore.ts';
import { Score } from '../Score.ts';
import { DeuceScore } from './DeuceScore.ts';

export class ThirtyScore extends ScoreState {
    constructor() {
        super('30');
    }

    public setState(score: Score, other: Score): void {
        if (other.isForty()) {
            score.setState(new DeuceScore());
            other.setState(new DeuceScore());
        } else {
            score.setState(new FortyScore());
        }
    }
}
