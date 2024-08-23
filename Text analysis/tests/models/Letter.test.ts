import { Letter } from '../../src/models/Letter';

describe('Letter', () => {
    test.each([
        { text: 'hola', expected: 4 },
        { text: 'hola mundo ** $ 11234', expected: 17 },
        { text: '', expected: 0 },
        { text: ' ', expected: 0 },
    ])('given a text when count it then return the number of letters', ({ text, expected }) => {
        expect(Letter.count(text)).toBe(expected);
    });
});
