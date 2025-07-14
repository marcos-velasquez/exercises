import { Word } from '../../src/models/Word';

describe('Word', () => {
    test('given a invalid word when analyze it then throw an error', () => {
        expect(() => new Word('hola como')).toThrow();
        expect(() => new Word('a b')).toThrow();
    });

    test.each([
        { origin: 'hola1', target: 'hola' },
        { origin: '1', target: ' ' },
        { origin: 'unapalabragrandeconmuchoscaracteres', target: 'unapalabragrandeconmuchoscaractere' },
    ])('given a text when compare isLengthGreaterThan then return true', ({ origin, target }) => {
        expect(new Word(origin).isLengthGreaterThan(new Word(target).length)).toBe(true);
    });

    test.each([
        { origin: 'hola', target: 'hola1' },
        { origin: ' ', target: '1' },
        { origin: 'unapalabragrandeconmuchoscaractere', target: 'unapalabragrandeconmuchoscaracteres' },
    ])('given a text when compare isLengthLessThan then return true', ({ origin, target }) => {
        expect(new Word(origin).isLengthLessThan(new Word(target).length)).toBe(true);
    });

    test.each([
        { origin: 'hola1', target: 'hola1' },
        { origin: 'unapalabragrandeconmuchoscaractere', target: 'unapalabragrandeconmuchoscaractere' },
        { origin: ' ', target: ' ' },
        {
            origin: 'untextodeoraciónconacentosysímbolos**%$',
            target: 'untextodeoraciónconacentosysímbolos**%$',
        },
    ])('given a text when compare isLengthEqualTo then return true', ({ origin, target }) => {
        expect(new Word(origin).isLengthEqualTo(new Word(target).length)).toBe(true);
    });

    test.each([
        { text: 'hola como estas', expected: ['hola', 'como', 'estas'] },
        { text: 'a b c d e f g', expected: ['a', 'b', 'c', 'd', 'e', 'f', 'g'] },
        { text: 'a b c d e f g zz', expected: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'zz'] },
        { text: '', expected: [] },
        { text: ' ', expected: [] },
        { text: 'hola', expected: ['hola'] },
    ])('given a text when createFromText then return an array of words', ({ text, expected }) => {
        expect(Word.createFromText(text)).toEqual(expected.map((t) => new Word(t)));
    });
});
