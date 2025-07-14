import assert from 'assert';
import { Polygon } from './Polygon.ts';

export class Rectangle implements Polygon {
    constructor(
        public readonly width: number,
        public readonly height: number
    ) {
        assert(width > 0, 'Width must be greater than 0');
        assert(height > 0, 'Height must be greater than 0');
    }

    public getArea(): number {
        return this.width * this.height;
    }
}
