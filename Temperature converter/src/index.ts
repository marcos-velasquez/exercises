import { Temperature } from './models/Temperature.ts';
import { Random } from './utils/Random.ts';

(async () => {
    const value = Random.number(1, 1000);

    console.log(`celsius (${value}) to fahrenheit (${new Temperature(`${value}ºC`).convert()})`);
    console.log(`fahrenheit (${value}) to celsius (${new Temperature(`${value}ºF`).convert()})`);
})();
