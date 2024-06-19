import { Battle } from '../../src/models/Battle';
import { Result } from '../../src/models/types/Result';
import { GoodArmyBuilder } from './builders/GoodArmyBuilder';
import { EvilArmyBuilder } from './builders/EvilArmyBuilder';

describe('Battle', () => {
    it('should win the good army', () => {
        const good = new GoodArmyBuilder().withTheStrongest().build();
        const evil = new EvilArmyBuilder().withTheWeakest().build();
        const battle = new Battle(good, evil);
        expect(battle.fight()).toBe(Result.GOOD);
    });

    it('should win the evil army', () => {
        const good = new GoodArmyBuilder().withTheWeakest().build();
        const evil = new EvilArmyBuilder().withTheStrongest().build();
        const battle = new Battle(good, evil);
        expect(battle.fight()).toBe(Result.EVIL);
    });

    it('should draw', () => {
        const good = new GoodArmyBuilder().withTheStrongest().build();
        const evil = new EvilArmyBuilder().withTheStrongest().build();
        const battle = new Battle(good, evil);
        expect(battle.fight()).toBe(Result.DRAW);
    });
});
