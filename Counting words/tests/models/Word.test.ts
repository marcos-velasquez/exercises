import { Word } from '../../src/models/Word';

describe('Word', () => {
    it.each([
        { input: 'Hello', expected: 'hello' },
        { input: 'World!$*()/@#/&^%', expected: 'world' },
        { input: 'Canción', expected: 'cancion' },
        { input: 'tónicas', expected: 'tonicas' },
    ])('should normalize word correctly', ({ input, expected }) => {
        const word = new Word(input);
        expect(word.normalize().value).toEqual(expected);
    });

    it('should throw an error if input is empty', () => {
        expect(() => new Word('')).toThrow();
    });
});
