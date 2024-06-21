import { PascalTriangle } from '../../src/models/PascalTriangle';

describe('PascalTriangle', () => {
    it.each([
        { size: 0, expected: [[1]] },
        { size: 1, expected: [[1], [1, 1]] },
        { size: 2, expected: [[1], [1, 1], [1, 2, 1]] },
        { size: 3, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] },
        { size: 4, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] },
        { size: 5, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]] },
    ])('should return a pascal triangle of size %d', ({ size, expected }) => {
        expect(new PascalTriangle(size).build()).toEqual(expected);
    });

    it('should return a error when the size is negative', () => {
        expect(() => new PascalTriangle(-1)).toThrow();
    });
});
