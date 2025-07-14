import { PrimeNumber } from './models/PrimeNumber.ts';

(async () => {
    const length = 100;

    for (let i = 1; i <= length; i++) {
        if (new PrimeNumber(i).isPrime()) {
            console.log(i);
        }
    }
})();
