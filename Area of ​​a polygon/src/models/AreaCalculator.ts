import { Polygon } from './Polygon.ts';

export class AreaCalculator {
    public static calculate(polygon: Polygon): number {
        return polygon.getArea();
    }
}
