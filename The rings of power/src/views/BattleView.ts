import { Battle } from '../models/Battle.ts';
import { Result } from '../models/types/Result.ts';

export class BattleView {
    private readonly resultMap = new Map<Result, string>([
        [Result.DRAW, 'Draw'],
        [Result.EVIL, 'Evil wins'],
        [Result.GOOD, 'Good wins'],
    ]);

    constructor(private readonly battle: Battle) {}

    public render() {
        console.log(`Battle:`);
        console.log(`Good: ${this.battle.getGoodTeam()}`);
        console.log('vs');
        console.log(`Evil: ${this.battle.getEvilTeam()}`);
        console.log('->', this.resultMap.get(this.battle.fight()));
    }
}
