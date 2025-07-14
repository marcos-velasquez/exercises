import { VendingMachine } from '../../src/models/VendingMachine';
import { Money } from '../../src/models/Money';
import { CoinType } from '../../src/models/types/CoinType';
import { VendingMachineBuilder } from '../builders/VendingMachineBuilder';
import { Coin } from '../../src/models/Coin';
describe('VendingMachine', () => {
    it('should create an instance', () => {
        expect(new VendingMachine()).toBeTruthy();
    });

    it('should add product to the machine', () => {
        const vendingMachine = new VendingMachineBuilder().withCodeAndMaxPriceAndName('C01', 'Coke').build();
        const purchase = vendingMachine.buy('C01', new Money([CoinType._100]));
        expect(purchase.name).toBe('Coke');
    });

    it('should return "Product not found or insufficient funds" if product is not found', () => {
        const vendingMachine = new VendingMachineBuilder().build();
        const purchase = vendingMachine.buy('C01', new Money([]));
        expect(purchase.name).toBe('Product not found or insufficient funds');
    });

    it('should return "Product not found or insufficient funds" if has insufficient funds', () => {
        const vendingMachine = new VendingMachineBuilder().withCodeAndMaxPrice('C01').build();
        const purchase = vendingMachine.buy('C01', new Money([CoinType._10]));
        expect(purchase.name).toBe('Product not found or insufficient funds');
    });

    it('It should return the name of the product and an array with the money back with empty coins', () => {
        const vendingMachine = new VendingMachineBuilder().withCodeAndPrice('C01', CoinType._50).build();
        const purchase = vendingMachine.buy('C01', new Money([CoinType._50]));
        expect(purchase.coins).toEqual([]);
    });

    it('It should return a error if money and price do not match', () => {
        const vendingMachine = new VendingMachineBuilder().withCodeAndPrice('C01', CoinType._50).build();
        expect(() => vendingMachine.buy('C01', new Money([CoinType._100]))).toThrow();
    });

    it.each([
        { price: CoinType._50, coinTypes: [CoinType._50, CoinType._10], expected: [CoinType._10] },
        {
            price: CoinType._50,
            coinTypes: [CoinType._50, CoinType._50, CoinType._10],
            expected: [CoinType._50, CoinType._10],
        },
    ])(
        'It should return the name of the product and an array with the money back with the fewest number of coins',
        ({ price, coinTypes, expected }) => {
            const vendingMachine = new VendingMachineBuilder().withCodeAndPrice('C01', price).build();
            const purchase = vendingMachine.buy('C01', new Money(coinTypes));
            expect(purchase.coins).toEqual(expected.map((type) => new Coin(type)));
        }
    );
});
