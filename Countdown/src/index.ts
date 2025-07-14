import { Countdown } from './models/Countdown.ts';

(async () => {
    const countdown = new Countdown({ start: 10, delay: 1 });
    console.log('Countdown started');
    countdown.start((n) => {
        console.log(n);
    });
})();
