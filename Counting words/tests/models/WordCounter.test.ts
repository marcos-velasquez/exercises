import { WordCounter } from '../../src/models/WordCounter.ts';

describe('WordCounter', () => {
    it.each([
        { phrase: 'Hello, World!', expected: { hello: 1, world: 1 } },
        {
            phrase: 'Canción para p Dormir dormir mientras duermes duermes para mientras',
            expected: {
                cancion: 1,
                para: 2,
                dormir: 2,
                mientras: 2,
                duermes: 2,
                p: 1,
            },
        },
    ])('should count words correctly', ({ phrase, expected }) => {
        const wordCounter = new WordCounter(phrase);
        expect(wordCounter.execute()).toEqual(expected);
    });
});
