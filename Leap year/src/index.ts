import { LeapYearFactory } from './models/LeapYearFactory.ts';
import { Year } from './models/Year.ts';

(async () => {
    const amount = 30;
    console.log(LeapYearFactory.createFrom(new Year(2024), amount));
})();
