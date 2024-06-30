import { Tennis } from './models/Tennis.ts';

(async () => {
    const sequence = ['p1', 'p2', 'p1', 'p2', 'p1', 'p2', 'p1', 'p1'];
    const result = Tennis.create('p1', 'p2').play(sequence);
    console.log(result.map((row) => row.join(' - ')));
})();
