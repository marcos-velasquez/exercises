import assert from 'assert';

export class CountdownDelay {
    constructor(public readonly value: number) {
        assert(value > 0, 'delay must be > 0');
    }

    public toMilliseconds() {
        return this.value * 1000;
    }
}
