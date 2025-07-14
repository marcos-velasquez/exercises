import { FibonacciSequence } from './models/FibonacciSequence.ts';

(async () => {
    const length = 50;
    const fibonacciSequence = new FibonacciSequence(length);
    console.log(fibonacciSequence.getSequence().join(', '));
})();
