import { CoinType } from './types/CoinType.ts';

export class Coin {
    constructor(public readonly value: CoinType) {}

    public isEqual(value: number): boolean {
        return this.value === value;
    }
}
