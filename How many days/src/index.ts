import { DateString } from './models/DateString.ts';

(async () => {
    const firstDate = new DateString('01/01/2024');
    const secondDate = new DateString('31/12/2024');
    console.log(firstDate.differenceInDays(secondDate));

    const createdAt = new DateString('12/06/2024');
    const today = new DateString();
    console.log('Created ago', createdAt.differenceInDays(today) + ' days');
})();
