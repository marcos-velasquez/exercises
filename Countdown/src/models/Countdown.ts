import { CountdownOptions } from './types/CountdownOptions.ts';
import { CountDownValue } from './CountdownValue.ts';
import { CountdownDelay } from './CountdownDelay.ts';

export class Countdown {
    private static DEFAULT_OPTIONS: Partial<CountdownOptions> = { delay: 1000 };
    private countdownValue: CountDownValue;
    private countdownDelay: CountdownDelay;

    constructor(options: CountdownOptions) {
        options = { ...Countdown.DEFAULT_OPTIONS, ...options };
        this.countdownValue = new CountDownValue(options.start);
        this.countdownDelay = new CountdownDelay(options.delay!);
    }

    public start(cb: (n: number) => void) {
        cb(this.countdownValue.value);
        const interval = setInterval(() => {
            this.countdownValue = this.countdownValue.decrement();
            cb(this.countdownValue.value);
            if (this.countdownValue.isZero()) {
                clearInterval(interval);
            }
        }, this.countdownDelay.toMilliseconds());
    }
}
