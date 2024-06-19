import { Army } from './Army.ts';
import { EvilRace, GoodRace } from './Race.ts';
import { Result } from './types/Result.ts';

export class Battle {
    constructor(
        private readonly good: Army<GoodRace>,
        private readonly evil: Army<EvilRace>
    ) {}

    public fight(): Result {
        if (this.good.isGreaterThan(this.evil)) {
            return Result.GOOD;
        } else if (this.evil.isGreaterThan(this.good)) {
            return Result.EVIL;
        } else {
            return Result.DRAW;
        }
    }

    public getGoodTeam() {
        return this.good.toString();
    }

    public getEvilTeam() {
        return this.evil.toString();
    }
}
