import assert from 'assert';
import { Coin } from './Coin.ts';
import { CoinType } from './types/CoinType.ts';

export class Money {
    public readonly coins: Coin[] = [];

    constructor(coinTypes: CoinType[]) {
        this.coins = coinTypes.map((type) => new Coin(type));
    }

    public subtract(coinType: CoinType) {
        assert(this.includes(coinType));
        this.coins.splice(this.findIndex(coinType), 1);
    }

    private findIndex(coinType: CoinType) {
        return this.coins.findIndex((coin) => coin.isEqual(coinType));
    }

    private includes(coinType: CoinType) {
        return this.findIndex(coinType) !== -1;
    }

    public hasSufficientFunds(amount: number): boolean {
        return this.founds >= amount;
    }

    private get founds(): number {
        return this.coins.reduce((total, coin) => total + coin.value, 0);
    }
}
