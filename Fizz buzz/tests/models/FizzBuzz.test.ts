import { FizzBuzz } from '../../src/models/FizzBuzz';

describe('FizzBuzz', () => {
    it.each([3, 6, 12, 93, 1098])('should return fizz when number %i is divisible by 3', (value) => {
        expect(FizzBuzz.convert(value)).toBe('fizz');
    });
    it.each([5, 10, 25, 100, 1235])('should return buzz when number %i is divisible by 5', (value) => {
        expect(FizzBuzz.convert(value)).toBe('buzz');
    });
    it.each([15, 30, 45, 60, 75, 90])('should return FizzBuzz when number %i is divisible by 3 and 5', (value) => {
        expect(FizzBuzz.convert(value)).toBe('fizzbuzz');
    });
    it.each([2, 4, 52, 112, 1343])('should return number when number %i is not divisible by 3 or 5', (value) => {
        expect(FizzBuzz.convert(value)).toBe(value);
    });
});
