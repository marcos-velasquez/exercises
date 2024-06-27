import { Phrase } from '../../src/models/Phrase';

describe('Phrase', () => {
    it.each([
        { value: 'abracadabra', expected: 'a' },
        { value: '123456789*&^%=', expected: '' },
        { value: 'abracadabra elefante emerger enfrente', expected: 'e' },
        { value: 'aaa eee iii ooo uuu', expected: 'a' },
        { value: 'aaaa eeee iiii oooo uuuu ú', expected: 'u' },
    ])('should return the vowel that is repeated the most', ({ value, expected }) => {
        expect(new Phrase(value).mostRepeatingVowel()).toBe(expected);
    });
});
