import assert from 'assert';

export class CountDownValue {
    constructor(public readonly value: number) {
        assert(value >= 0, 'value must be >= 0');
    }

    public decrement() {
        return new CountDownValue(this.value - 1);
    }

    public isZero() {
        return this.value === 0;
    }
}
