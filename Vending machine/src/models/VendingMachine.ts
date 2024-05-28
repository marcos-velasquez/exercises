import { Product } from './Product.ts';
import { Purchase } from './Purchase.ts';
import { NullProduct } from './NullProduct.ts';
import { Money } from './Money.ts';

export class VendingMachine {
    private readonly products: Product[] = [];

    public add(product: Product) {
        this.products.push(product);
    }

    public buy(code: string, money: Money): Purchase {
        const product = this.findProduct(code) || new NullProduct();
        if (product.isNull() || !money.hasSufficientFunds(product.price)) {
            return new Purchase(new NullProduct(), money);
        }
        money.subtract(product.price);
        return new Purchase(product, money);
    }

    private findProduct(code: string): Product | undefined {
        return this.products.find((product) => product.code === code);
    }
}
