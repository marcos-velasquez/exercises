import assert from 'assert';
import { Race } from '../Race.ts';
import { Random } from '../../utils/Random.ts';

export abstract class RaceFactory<T extends Race> {
    constructor(private readonly team: T[]) {}

    public random(amount = 1): T[] {
        assert(amount > 0, 'Amount must be greater than 0');
        const races: T[] = [];
        for (let i = 0; i < amount; i++) {
            const index = Random.number(0, this.team.length - 1);
            races.push(this.team[index]);
        }
        return races;
    }
}
