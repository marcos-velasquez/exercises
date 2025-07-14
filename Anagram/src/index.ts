import { Anagram } from './models/Anagram.ts';

(async () => {
    const words = [
        ['cara', 'arca'],
        ['a', 'a'],
        ['el', 'le'],
        ['lácteo', 'coleta'],
        ['Blanco', 'balcón'],
        ['school master', 'the classroom'],
        ['dormitory', 'dirty room'],
        ['cara', 'carro'],
        ['a', 'e'],
        ['Blanco', 'Blancos'],
        ['lácteo', 'balcón'],
        ['school master', 'the classroom!'],
        ['dormitory', 'dirty rooms'],
        ['hola', 'hola'],
    ];

    for (const [a, b] of words) {
        console.log(`are '${a}' and '${b}' anagrams? `, Anagram.isAnagram(a, b));
    }
})();
