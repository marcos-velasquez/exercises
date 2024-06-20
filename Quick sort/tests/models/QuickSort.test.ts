import { QuickSort } from '../../src/models/QuickSort.ts';

describe('QuickSort', () => {
    it.each([
        { array: [5, 3, 1, 2, 4] },
        { array: [-20, 0, 10032, 1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER] },
    ])('should sort an array', ({ array }) => {
        expect(QuickSort.sort(array)).toEqual(array.sort((a, b) => a - b));
    });
});
