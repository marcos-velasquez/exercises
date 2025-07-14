import { T9Keyboard } from '../src/models/T9Keyboard';

describe('T9Keyboard', () => {
    it.each([
        ['0', ' '],
        ['1', ','],
        ['11', '.'],
        ['111', '?'],
        ['1111', '!'],
        ['2', 'A'],
        ['22', 'B'],
        ['222', 'C'],
        ['3', 'D'],
        ['33', 'E'],
        ['333', 'F'],
        ['4', 'G'],
        ['44', 'H'],
        ['444', 'I'],
        ['5', 'J'],
        ['55', 'K'],
        ['555', 'L'],
        ['6', 'M'],
        ['66', 'N'],
        ['666', 'O'],
        ['7', 'P'],
        ['77', 'Q'],
        ['777', 'R'],
        ['7777', 'S'],
        ['8', 'T'],
        ['88', 'U'],
        ['888', 'V'],
        ['9', 'W'],
        ['99', 'X'],
        ['999', 'Y'],
        ['9999', 'Z'],
    ])('give a few digits when convert is called then return a string', (input, expected) => {
        expect(new T9Keyboard().convert(input)).toBe(expected);
    });

    it.each([
        ['0000', ' '],
        ['11111', ','],
        ['22222', 'B'],
        ['7777777', 'R'],
        ['99999999', 'Z'],
    ])('given more digits then necessary when convert is called then return an valid string', (input, expected) => {
        expect(new T9Keyboard().convert(input)).toBe(expected);
    });

    it("given more digits separated by '-' when convert is called then return an valid string", () => {
        expect(new T9Keyboard().convert('6-666-88-777-33-3-33-888')).toBe('MOUREDEV');
        expect(new T9Keyboard().convert('6-666-88-777-33-0-3-33-888')).toBe('MOURE DEV');
        expect(new T9Keyboard().convert('7-8-7-3-7')).toBe('SUPER');
    });
});
