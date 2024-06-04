import { Year } from '../../src/models/Year';

describe('Year', () => {
    it.each([20, 2024, 3048])('should return is a leap year', (value) => {
        expect(new Year(value).isLeapYear()).toBe(true);
    });

    it.each([19, 2023, 3047])('should return is not a leap year', (value) => {
        expect(new Year(value).isLeapYear()).toBe(false);
    });
});
