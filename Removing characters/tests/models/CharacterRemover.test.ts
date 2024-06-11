import { CharacterRemover } from '../../src/models/CharacterRemover';

describe('CharacterRemover', () => {
    it.each([
        {
            input: { str1: 'hola', str2: 'hola' },
            output: { out1: '', out2: '' },
        },
        {
            input: { str1: 'hola', str2: 'olas' },
            output: { out1: 'h', out2: 's' },
        },
        {
            input: { str1: 'hola como estas jugando', str2: 'hola como te sientes' },
            output: { out1: 'jugd', out2: 'i' },
        },
    ])('should remove a character from a strings', ({ input, output }) => {
        expect(new CharacterRemover(input.str1, input.str2).execute()).toEqual(output);
    });
});
