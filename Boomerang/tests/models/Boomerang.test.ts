import { Boomerang } from '../../src/models/Boomerang';

describe('Boomerang', () => {
    test.each([
        { values: [2, 1, 2, 3, 3, 4, 2, 4], expected: 2 },
        { values: [2, 1, 2], expected: 1 },
        { values: [], expected: 0 },
        { values: [2, 2, 2], expected: 0 },
        { values: [-10, 2, -10, 1023, 5, 1023, 5, 1, -5], expected: 3 },
    ])('should return a total number of boomerangs ', ({ values, expected }) => {
        expect(Boomerang.evaluate(values)).toBe(expected);
    });
});
