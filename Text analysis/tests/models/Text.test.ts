import { Text } from '../../src/models/Text';

describe('Text', () => {
    test.each([
        { text: 'hola', expected: 1 },
        { text: 'hola mundo', expected: 2 },
        { text: 'a b c d e f g hola como estas h 123 ** kk z', expected: 15 },
        { text: '', expected: 0 },
        { text: ' ', expected: 0 },
    ])('given a text when analyze it then return an object with the total number of word', ({ text, expected }) => {
        expect(new Text(text).words.total).toBe(expected);
    });

    test.each([
        { text: 'hola', expected: 4 },
        { text: 'hola mundo', expected: 4.5 },
        { text: 'a b c d e f g hola como estas h 123 ** kk z', expected: 1.9 },
        { text: '', expected: 0 },
        { text: '  ', expected: 0 },
    ])('given a text when analyze it then return an object with the average length of word', ({ text, expected }) => {
        expect(new Text(text).words.averageLength).toBe(expected);
    });

    test.each([
        { text: 'hola como. estas hola con punto', expected: 1 },
        { text: 'hola como estas sin punto', expected: 0 },
        { text: 'a.b.c.d. e.f.g.h.1.2.3.4 . . ..', expected: 5 },
        { text: 'a. b. c. d. e. f. g. h. 1. 2. 3. 4 . . . .', expected: 15 },
    ])('give a text when analyze it then return an object with the total of sentences', ({ text, expected }) => {
        expect(new Text(text).sentences.total).toBe(expected);
    });

    test.each([
        { text: 'hola', expected: ['hola'] },
        { text: 'hola que bien estas mundo', expected: ['estas', 'mundo'] },
        { text: ' ', expected: [] },
        { text: 'a b c d e f g', expected: ['a', 'b', 'c', 'd', 'e', 'f', 'g'] },
        { text: 'a b c d e f g zz', expected: ['zz'] },
    ])('given a text when analyze it then return an object with the word longest', ({ text, expected }) => {
        expect(new Text(text).words.longest).toEqual(expected);
    });
});
