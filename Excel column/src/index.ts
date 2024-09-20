import { Excel } from './models/Excel.ts';

(async () => {
    const names = ['AA', 'AB', 'ACD', 'AD', 'AE', 'AFFG', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO'];
    names.forEach((name) => console.log(`${name} =`, Excel.columnNumber(name)));
})();
