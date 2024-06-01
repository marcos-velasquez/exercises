import { Expression } from '../../src/models/Expression';

describe('Expression', () => {
    it.each(['2+2', '2-2', '2*2', '2/2', '2+2-2*2/2'])('should create an expression %s', (value) => {
        expect(() => new Expression(value)).not.toThrow();
    });

    it.each(['2+2a', '1+1+', '-3+3', ''])('should return a error if the expression %s is invalid', (value) => {
        expect(() => new Expression(value)).toThrow();
    });

    it.each([
        ['2+2', 4],
        ['2-2', 0],
        ['2*2', 4],
        ['2/2', 1],
        ['2+2-2*2/2', 2],
    ])('should evaluate an expression %s correctly', (value, expected) => {
        expect(new Expression(value).evaluate()).toBe(expected);
    });
});
