import assert from 'assert';
import { Polygon } from './Polygon.ts';

export class Triangle implements Polygon {
    constructor(
        public readonly base: number,
        public readonly height: number
    ) {
        assert(base > 0, 'Base must be greater than 0');
        assert(height > 0, 'Height must be greater than 0');
    }

    public getArea(): number {
        return (this.base * this.height) / 2;
    }
}
