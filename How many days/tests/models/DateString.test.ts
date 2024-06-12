import { DateString } from '../../src/models/DateString';

describe('Date', () => {
    it.each(['01/01/2024', '31/12/2024', '15/06/1999'])('should create a Date object from a string', (value) => {
        expect(() => new DateString(value)).not.toThrow();
        expect(new DateString(value).value).toBe(value);
    });

    it('should create a Date object from default value', () => {
        const date = new Date();
        expect(new DateString().value).toEqual(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    });

    it.each(['invalid date', '31-12-2024', '15.06.1999'])('should throw an error if the date is invalid', (value) => {
        expect(() => new DateString(value)).toThrow();
    });

    it.each([
        { origin: '01/01/2024', target: '31/12/2024', expected: 365 },
        { origin: '10/06/2030', target: '10/06/2030', expected: 0 },
        { origin: '12/10/2030', target: '12/11/2030', expected: 31 },
    ])('should calculate the difference in days between two dates', ({ origin, target, expected }) => {
        const firstDate = new DateString(origin);
        const secondDate = new DateString(target);
        expect(firstDate.differenceInDays(secondDate)).toBe(expected);
    });
});
