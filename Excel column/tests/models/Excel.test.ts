import { Excel } from '../../src/models/Excel';

describe('Excel', () => {
    it.each([
        { name: '', expected: 0 },
        { name: 'A', expected: 1 },
        { name: 'Z', expected: 26 },
        { name: 'aa', expected: 27 },
        { name: 'ca', expected: 79 },
        { name: 'xFd', expected: 16384 },
        { name: 'zzzz', expected: 475254 },
    ])('give a name when calculate number then return a correct number', ({ name, expected }) => {
        expect(Excel.columnNumber(name)).toBe(expected);
    });

    it.each([{ name: 'A*' }, { name: 'a1' }, { name: '_A1' }, { name: 'A B' }])(
        'give a invalid name when calculate number then throw an error',
        ({ name }) => {
            expect(() => Excel.columnNumber(name)).toThrow();
        }
    );
});
