import { FizzBuzz } from './models/FizzBuzz.ts';

(async () => {
    const amount = 100;

    for (let i = 1; i <= amount; i++) {
        console.log(FizzBuzz.convert(i));
    }
})();
