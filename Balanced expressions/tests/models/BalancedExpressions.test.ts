import { Expression } from '../../src/models/Expression';

describe('Balanced expressions', () => {
    it.each([
        { expression: '[]' },
        { expression: '[({()})]' },
        { expression: '{([()]([]))}' },
        { expression: '({()})' },
        { expression: '{ [ a * ( c + d ) ] - 5 }', expected: true },
    ])('should return true if the expression is balanced', ({ expression }) => {
        expect(new Expression(expression).isBalanced()).toBe(true);
    });

    it.each([
        { expression: '[(]' },
        { expression: '{([)]}' },
        { expression: '[{(})]]' },
        { expression: '{ [ a * ( c + d )  - 5 }' },
    ])('should return false if the expression is not balanced', ({ expression }) => {
        expect(new Expression(expression).isBalanced()).toBe(false);
    });
});
