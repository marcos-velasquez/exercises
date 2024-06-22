import { Temperature } from '../../src/models/Temperature.ts';

describe('Temperature', () => {
    it.each([
        { value: '0ºC', expected: 32 },
        { value: '-125ºC', expected: -193 },
        { value: '123ºC', expected: 253.4 },
    ])('should convert from celsius to fahrenheit', ({ value, expected }) => {
        expect(new Temperature(value).convert()).toBe(expected);
    });

    it.each([
        { value: '0ºF', expected: -17.8 },
        { value: '-330ºF', expected: -201.1 },
        { value: '257ºF', expected: 125 },
    ])('should convert from fahrenheit to celsius', ({ value, expected }) => {
        expect(new Temperature(value).convert()).toBe(expected);
    });

    it.each(['0ºC', '10ºF', '-10ºc', '100ºf'])(
        'should create an instance of Temperature when the input value %i is valid',
        (value) => {
            expect(() => new Temperature(value)).not.toThrow();
        }
    );

    it.each(['0', '1°F0', '-2000', '1040,22', '100º', '100F', '-10C'])(
        'should return a error when the input is not valid',
        (value) => {
            expect(() => new Temperature(value)).toThrow();
        }
    );
});
