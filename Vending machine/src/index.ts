import { Money } from './models/Money.ts';
import { Product } from './models/Product.ts';
import { VendingMachine } from './models/VendingMachine.ts';
import { CoinType } from './models/types/CoinType.ts';

(async () => {
    const vendingMachine = new VendingMachine();
    vendingMachine.add(new Product('C01', 'Coke', CoinType._50));
    const purchase = vendingMachine.buy('C01', new Money([CoinType._50, CoinType._10]));
    console.log(purchase.name, purchase.coins);
})();
