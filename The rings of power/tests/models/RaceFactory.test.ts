import { GoodRaceFactory } from '../../src/models/Factories/GoodRaceFactory';
import { EvilRaceFactory } from '../../src/models/Factories/EvilRaceFactory';

describe('RaceFactory', () => {
    it('should create a random amount of Good Races', () => {
        const amount = 5;
        const good = new GoodRaceFactory().random(amount);
        expect(good.length).toBe(amount);
    });

    it('should create a random amount of Evil Races', () => {
        const amount = 10;
        const evil = new EvilRaceFactory().random(amount);
        expect(evil.length).toBe(amount);
    });

    it('should return a error if the amount is less than 0', () => {
        const amount = -1;
        expect(() => new GoodRaceFactory().random(amount)).toThrow();
        expect(() => new EvilRaceFactory().random(amount)).toThrow();
    });
});
