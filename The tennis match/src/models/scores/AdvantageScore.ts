import { ScoreState } from './ScoreState.ts';
import { WinScore } from './WinScore.ts';
import { Score } from '../Score.ts';

export class AdvantageScore extends ScoreState {
    constructor() {
        super('advantage');
    }

    public isAdvantage(): boolean {
        return true;
    }

    public setState(score: Score, other: Score): void {
        score.setState(new WinScore());
    }
}
