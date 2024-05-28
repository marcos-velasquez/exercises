import { Product } from './Product.ts';
import { CoinType } from './types/CoinType.ts';

export class NullProduct extends Product {
    constructor() {
        super('', 'Product not found or insufficient funds', CoinType._0);
    }

    public isNull() {
        return true;
    }
}
