import { Factorial } from '../../src/models/Factorial';

describe('Factorial', () => {
    it.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
        [6, 720],
        [7, 5040],
        [8, 40320],
        [9, 362880],
        [10, 3628800],
    ])('should calculate the factorial of %i correctly', (value: number, expected: number) => {
        expect(Factorial.calculate(value)).toBe(expected);
    });

    it('should return a error if n < 0', () => {
        expect(() => Factorial.calculate(-1)).toThrow();
    });

    it('should return a error if n > LIMIT', () => {
        expect(() => Factorial.calculate(Factorial.LIMIT + 1)).toThrow();
    });
});
