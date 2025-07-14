import assert from 'assert';

export class PascalTriangle {
    constructor(private readonly size: number) {
        assert(size >= 0, 'The size must be greater than or equal to 0');
    }
    public build(): number[][] {
        return this.execute();
    }

    private execute(size = this.size): number[][] {
        if (size === 0) return [[1]];
        const triangle = this.execute(size - 1);
        const lastRow = triangle[triangle.length - 1];
        const newRow = [1];
        for (let i = 0; i < lastRow.length - 1; i++) {
            newRow.push(lastRow[i] + lastRow[i + 1]);
        }
        newRow.push(1);
        triangle.push(newRow);
        return triangle;
    }
}
