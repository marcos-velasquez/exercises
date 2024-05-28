import { faker } from '@faker-js/faker';
import { CoinType } from '../../src/models/types/CoinType';
import { Product } from '../../src/models/Product';
import { NullProduct } from '../../src/models/NullProduct';

export class ProductBuilder {
    public readonly nullProduct = new NullProduct();
    private code = faker.lorem.word({ length: 3 });
    private name = faker.commerce.productName();
    private price = CoinType._50;

    public withCode(code: string): ProductBuilder {
        this.code = code;
        return this;
    }

    public withName(name: string): ProductBuilder {
        this.name = name;
        return this;
    }

    public withPrice(price: CoinType): ProductBuilder {
        this.price = price;
        return this;
    }

    public withMaxPrice(): ProductBuilder {
        this.price = CoinType._100;
        return this;
    }

    public withMinPrice(): ProductBuilder {
        this.price = CoinType._5;
        return this;
    }

    public build(): Product {
        return new Product(this.code, this.name, this.price);
    }

    public buildMultiple(amount: number): Product[] {
        return Array.from({ length: amount }, () => this.build());
    }
}
