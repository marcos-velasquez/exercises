import assert from 'assert';

export class FibonacciSequence {
    constructor(private readonly length: number) {}

    public getSequence(): number[] {
        assert(this.length > 0, 'Length must be greater than 0');
        const sequence = [0, 1];
        for (let i = 2; i < this.length; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
}
