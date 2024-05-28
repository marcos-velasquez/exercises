import { Product } from '../../src/models/Product';
import { VendingMachine } from '../../src/models/VendingMachine';
import { CoinType } from '../../src/models/types/CoinType';
import { ProductBuilder } from './ProductBuilder';

export class VendingMachineBuilder {
    private products: Product[] = [];

    public withProduct(product: Product): VendingMachineBuilder {
        this.products.push(product);
        return this;
    }

    public withRegularProduct(): VendingMachineBuilder {
        this.products = [new ProductBuilder().build()];
        return this;
    }

    public withCodeAndPrice(code: string, price: CoinType): VendingMachineBuilder {
        this.products = [new ProductBuilder().withPrice(price).withCode(code).build()];
        return this;
    }

    public withMinProduct(): VendingMachineBuilder {
        this.products = [new ProductBuilder().withMinPrice().build()];
        return this;
    }

    public withMaxProduct(): VendingMachineBuilder {
        this.products = [new ProductBuilder().withMaxPrice().build()];
        return this;
    }

    public withCode(code: string): VendingMachineBuilder {
        this.products = [new ProductBuilder().withCode(code).build()];
        return this;
    }

    public withCodeAndMaxPrice(code: string): VendingMachineBuilder {
        this.products = [new ProductBuilder().withCode(code).withMaxPrice().build()];
        return this;
    }

    public withCodeAndMaxPriceAndName(code: string, name: string): VendingMachineBuilder {
        this.products = [new ProductBuilder().withCode(code).withMaxPrice().withName(name).build()];
        return this;
    }

    public build(): VendingMachine {
        const vendingMachine = new VendingMachine();
        this.products.forEach((product) => vendingMachine.add(product));
        return vendingMachine;
    }
}
