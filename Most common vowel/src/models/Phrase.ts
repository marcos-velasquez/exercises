import { Normalize } from '../utils/Normalize.ts';

export class Phrase {
    private static readonly VOWELS = ['a', 'e', 'i', 'o', 'u'];
    public readonly value: string;

    constructor(value: string) {
        this.value = Normalize.string(value);
    }

    public mostRepeatingVowel(): string {
        const result = { max: 0, vowel: '' };
        for (let vowel of Phrase.VOWELS) {
            const count = this.value.split(vowel).length - 1;
            if (count > result.max) {
                result.max = count;
                result.vowel = vowel;
            }
        }
        return result.vowel;
    }
}
