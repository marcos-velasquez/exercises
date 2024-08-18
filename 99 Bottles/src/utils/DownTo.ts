import assert from 'assert';

export class DownTo {
    constructor(
        private readonly max: number,
        private readonly min: number
    ) {
        assert(this.max >= this.min, 'max must be greater than min');
    }

    public values(): number[] {
        const numbers = [];
        for (let n = this.max; n >= this.min; n--) {
            numbers.push(n);
        }
        return numbers;
    }
}
