import { PascalTriangle } from '../models/PascalTriangle.ts';

export class PascalTriangleView {
    constructor(private readonly pascalTriangle: PascalTriangle) {}

    public print(): void {
        const triangle = this.pascalTriangle.build();
        for (const row of triangle) {
            console.log(row.join(' '));
        }
    }
}
