import { Boomerang } from './models/Boomerang.ts';

(async () => {
    const values = [2, 1, 2, 3, 3, 4, 2, 4];
    console.log(`Boomerang.evaluate(${values}) = ${Boomerang.evaluate(values)}`);
})();
