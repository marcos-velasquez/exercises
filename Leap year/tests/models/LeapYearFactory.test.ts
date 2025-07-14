import { Year } from '../../src/models/Year';
import { LeapYearFactory } from '../../src/models/LeapYearFactory';

describe('LeapYearFactory', () => {
    it.each([
        { value: 2020, amount: 10, expected: 2056 },
        { value: 2020, amount: 1, expected: 2020 },
        { value: 2016, amount: 5, expected: 2032 },
        { value: 1996, amount: 30, expected: 2116 },
    ])('should return the right amount of leap years from $value', ({ value, amount, expected }) => {
        const years = LeapYearFactory.createFrom(new Year(value), amount);
        expect(years.length).toBe(amount);
        expect(years[years.length - 1].value).toBe(expected);
    });

    it('should throw an error if amount is less than or equal to 0', () => {
        expect(() => LeapYearFactory.createFrom(new Year(2020), 0)).toThrow();
        expect(() => LeapYearFactory.createFrom(new Year(2020), -1)).toThrow();
    });

    it('should throw an error if year is not a leap year', () => {
        expect(() => LeapYearFactory.createFrom(new Year(2021), 1)).toThrow();
    });
});
