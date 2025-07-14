import { ScoreState } from './ScoreState.ts';
import { AdvantageScore } from './AdvantageScore.ts';
import { Score } from '../Score.ts';

export class DeuceScore extends ScoreState {
    constructor() {
        super('deuce');
    }

    public isDeuce(): boolean {
        return true;
    }

    public setState(score: Score, other: Score): void {
        if (other.isAdvantage()) {
            other.setState(new DeuceScore());
        } else {
            score.setState(new AdvantageScore());
        }
    }
}
