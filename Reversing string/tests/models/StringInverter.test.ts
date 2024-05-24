import { StringInverter } from '../../src/models/StringInverter.ts';

describe('StringInverter', () => {
    it.each([
        ['', ''],
        ['Hello World', 'dlroW olleH'],
        ['Hola mundo', 'odnum aloH'],
        ['You are a good person', 'nosrep doog a era uoY'],
        ['12345', '54321'],
        ['!@#$%^&*()', ')(*&^%$#@!'],
        ['a', 'a'],
        ['ab', 'ba'],
        ['abc', 'cba'],
        ['abcd', 'dcba'],
        ['abcde', 'edcba'],
        ['abcdef', 'fedcba'],
    ])('should invert a string (%s) to (%s)', async (input, expected) => {
        const stringInverter = new StringInverter();
        const result = stringInverter.invert(input);
        expect(result).toBe(expected);
    });
});
