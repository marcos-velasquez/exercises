import { FibonacciSequence } from '../../src/models/FibonacciSequence';

describe('FibonacciSequence', () => {
    it('should generate the correct sequence', () => {
        const sequence = new FibonacciSequence(10);
        expect(sequence.getSequence()).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('should generate a error with negative numbers', () => {
        const sequence = new FibonacciSequence(-10);
        expect(() => sequence.getSequence()).toThrow('Length must be greater than 0');
    });
});
