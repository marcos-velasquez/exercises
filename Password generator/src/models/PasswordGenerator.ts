import assert from 'assert';
import { Random } from '../utils/Random.ts';
import { PasswordConfig, PasswordConfigBuilder } from '../models/PasswordConfig.ts';
import { Array } from '../utils/Array.ts';

export class PasswordGenerator {
    public static readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    public static readonly numbers = '0123456789';
    public static readonly symbols = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    private config: PasswordConfig;

    constructor(config: Partial<PasswordConfig> = {}) {
        this.config = { ...new PasswordConfigBuilder().build(), ...config };
        assert(this.config.length.min >= PasswordConfigBuilder.MIN_LENGTH);
        assert(this.config.length.max <= PasswordConfigBuilder.MAX_LENGTH);
        assert(this.config.length.min <= this.config.length.max);
    }

    public generate(): string {
        const characters = this.getCharacters();

        let password = '';

        if (this.config.withUpperCase) {
            password += PasswordGenerator.alphabet.charAt(Random.number(0, PasswordGenerator.alphabet.length - 1));
        }
        if (this.config.withNumbers) {
            password += PasswordGenerator.numbers.charAt(Random.number(0, PasswordGenerator.numbers.length - 1));
        }
        if (this.config.withSymbols) {
            password += PasswordGenerator.symbols.charAt(Random.number(0, PasswordGenerator.symbols.length - 1));
        }

        const passwordLength = Random.number(this.config.length.min, this.config.length.max);
        for (let i = password.length; i < passwordLength; i++) {
            password += characters.charAt(Random.number(0, characters.length - 1));
        }

        return Array.shuffle(password.split('')).join('');
    }

    private getCharacters(): string {
        let characters = PasswordGenerator.alphabet.toLowerCase();
        if (this.config.withUpperCase) characters += PasswordGenerator.alphabet;
        if (this.config.withNumbers) characters += PasswordGenerator.numbers;
        if (this.config.withSymbols) characters += PasswordGenerator.symbols;
        return characters;
    }
}
