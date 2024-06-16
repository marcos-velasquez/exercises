import { LostNumberEvaluator } from '../../src/models/LostNumberEvaluator';

describe('LostNumber', () => {
    it.each([{ values: [10, 11, 15, 13] }, { values: [-20, -10 - 30, 1, 2, 3] }])(
        'should return a error if the array is not ordered',
        ({ values }) => {
            expect(() => new LostNumberEvaluator(values)).toThrow();
        }
    );

    it.each([{ values: [10] }])('should return a error if the array less than 2 numbers', ({ values }) => {
        expect(() => new LostNumberEvaluator(values)).toThrow();
    });

    it.each([{ values: [5, 6, 5, 10] }, { values: [-20, 2, 3, 1, -20] }])(
        'should return a error if the array has a duplicated number',
        ({ values }) => {
            expect(() => new LostNumberEvaluator(values)).toThrow();
        }
    );

    it.each([
        { values: [10, 11, 13, 15], expected: [12, 14] },
        { values: [-5, -4, -3, 1, 2, 3], expected: [-2, -1, 0] },
        { values: [1, 3, 5], expected: [2, 4] },
    ])('should return lost numbers in an array', ({ values, expected }) => {
        expect(new LostNumberEvaluator(values).evaluate()).toEqual(expected);
    });
});
