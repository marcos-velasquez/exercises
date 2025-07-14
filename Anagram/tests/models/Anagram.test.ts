import { Anagram } from '../../src/models/Anagram';

describe('Anagram', () => {
    it.each([
        ['cara', 'arca'],
        ['el', 'le'],
        ['lácteo', 'coleta'],
        ['Blanco', 'balcón'],
        ['school master', 'the classroom'],
        ['dormitory', 'dirty room'],
    ])('should be anagram of %s and %s', (a, b) => {
        expect(Anagram.isAnagram(a, b)).toBe(true);
    });

    it.each([
        ['cara', 'carro'],
        ['a', 'e'],
        ['Blanco', 'Blancos'],
        ['lácteo', 'balcón'],
        ['school master', 'the classroom!'],
        ['dormitory', 'dirty rooms'],
        ['hola', 'hola'],
    ])('should not be anagram of %s and %s', (a, b) => {
        expect(Anagram.isAnagram(a, b)).toBe(false);
    });
});
