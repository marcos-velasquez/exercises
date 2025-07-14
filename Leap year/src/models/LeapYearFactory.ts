import assert from 'assert';
import { Year } from './Year.ts';

export class LeapYearFactory {
    public static createFrom(year: Year, amount: number): Year[] {
        assert(amount > 0, 'Amount must be greater than 0');
        assert(year.isLeapYear(), 'Year must be a leap year');

        const years: Year[] = [];

        while (years.length < amount) {
            if (year.isLeapYear()) {
                years.push(year);
            }
            year = new Year(year.value + 1);
        }

        return years;
    }
}
