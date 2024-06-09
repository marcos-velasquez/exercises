import assert from 'assert';
import { Polygon } from './Polygon.ts';

export class Square implements Polygon {
    constructor(public readonly side: number) {
        assert(side > 0, 'Side must be greater than 0');
    }

    public getArea(): number {
        return this.side * this.side;
    }
}
