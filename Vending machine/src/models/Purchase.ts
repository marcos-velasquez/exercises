import { Money } from './Money.ts';
import { Product } from './Product.ts';

export class Purchase {
    constructor(
        private readonly product: Product,
        private readonly money: Money
    ) {}

    public get name() {
        return this.product.name;
    }

    public get coins() {
        return this.money.coins;
    }
}
