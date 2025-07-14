import assert from 'assert';
import * as r from 'ramda';

export class LostNumberEvaluator {
    private static readonly MIN_LENGTH = 2;

    constructor(private readonly values: number[]) {
        assert(this.values.length >= LostNumberEvaluator.MIN_LENGTH, 'Array must have at least 2 numbers');
        assert(new Set(this.values).size === this.values.length, 'Array has duplicated numbers');
        assert(r.equals(r.sortBy(r.identity)(this.values), this.values), 'Array is not ordered');
    }

    public evaluate(): number[] {
        const [min, max] = [Math.min(...this.values), Math.max(...this.values)];
        return r.range(min + 1, max).filter((value) => !this.values.includes(value));
    }
}
