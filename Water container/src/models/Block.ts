import assert from 'assert';

export class Block {
    constructor(public readonly value: number) {
        assert(value >= 0, 'Value must be non-negative');
    }

    public isLessThanOrEqualTo(other: Block): boolean {
        return this.value <= other.value;
    }

    public getMaxBlock(other: Block): Block {
        return this.value >= other.value ? this : other;
    }

    public calculateWaterAboveComparedTo(other: Block): number {
        return Math.max(0, other.value - this.value);
    }
}
