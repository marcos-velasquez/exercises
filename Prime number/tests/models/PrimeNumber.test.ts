import { PrimeNumber } from '../../src/models/PrimeNumber';

describe('PrimeNumber', () => {
    it.each([3, 5, 97, 997])('should return true if the number %i is prime', (value: number) => {
        expect(new PrimeNumber(value).isPrime()).toBe(true);
    });

    it.each([-7, -3, 4, 6, 8, 100, 1002])('should return false if the number %i is not prime', (value: number) => {
        expect(new PrimeNumber(value).isPrime()).toBe(false);
    });
});
