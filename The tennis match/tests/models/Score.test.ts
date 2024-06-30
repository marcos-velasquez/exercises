import { Score } from '../../src/models/Score.ts';
import { AdvantageScore } from '../../src/models/scores/AdvantageScore.ts';
import { DeuceScore } from '../../src/models/scores/DeuceScore.ts';
import { FifteenScore } from '../../src/models/scores/FifteenScore.ts';
import { FortyScore } from '../../src/models/scores/FortyScore.ts';
import { LoveScore } from '../../src/models/scores/LoveScore.ts';
import { ThirtyScore } from '../../src/models/scores/ThirtyScore.ts';
import { WinScore } from '../../src/models/scores/WinScore.ts';

describe('Score', () => {
    it('should be created with love at the beginning', () => {
        expect(Score.create()['state']).toBeInstanceOf(LoveScore);
    });

    it('should progress the score correctly with static opponent', () => {
        const sut = Score.create();
        const doc = Score.create();
        expect(sut['state']).toBeInstanceOf(LoveScore);
        sut.next(doc);
        expect(sut['state']).toBeInstanceOf(FifteenScore);
        sut.next(doc);
        expect(sut['state']).toBeInstanceOf(ThirtyScore);
        sut.next(doc);
        expect(sut['state']).toBeInstanceOf(FortyScore);
        sut.next(doc);
        expect(sut['state']).toBeInstanceOf(WinScore);
    });

    it('should progress the score correctly to Deuce', () => {
        const sut = Score.create();
        const doc = Score.create();
        sut['state'] = new ThirtyScore();
        doc['state'] = new FortyScore();
        sut.next(doc);
        expect(sut['state']).toBeInstanceOf(DeuceScore);
    });

    it('should progress the score correctly to Advantage', () => {
        const sut = Score.create();
        const doc = Score.create();
        sut['state'] = new DeuceScore();
        doc['state'] = new DeuceScore();
        sut.next(doc);
        expect(sut['state']).toBeInstanceOf(AdvantageScore);
    });

    it('should back the score correctly to Deuce', () => {
        const sut = Score.create();
        const doc = Score.create();
        sut['state'] = new AdvantageScore();
        doc['state'] = new DeuceScore();
        doc.next(sut);
        expect(sut['state']).toBeInstanceOf(DeuceScore);
    });

    it('should progress the score correctly to Win', () => {
        const sut = Score.create();
        const doc = Score.create();
        sut['state'] = new AdvantageScore();
        doc['state'] = new DeuceScore();
        sut.next(sut);
        expect(sut['state']).toBeInstanceOf(WinScore);
    });
});
