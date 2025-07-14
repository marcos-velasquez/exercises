import { CoinType } from './types/CoinType.ts';

export class Product {
    constructor(
        public readonly code: string,
        public readonly name: string,
        public readonly price: CoinType
    ) {}

    public isNull() {
        return false;
    }
}
