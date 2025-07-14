import { Coordinate } from './Coordinate.ts';
import { Direction } from './Direction.ts';

export class Robot {
    private readonly coordinate = new Coordinate();
    private readonly direction = new Direction();

    public move(steps: number[]) {
        steps.forEach((step) => {
            this.direction.move(this.coordinate, step);
            this.direction.next();
        });
    }

    public whereIs() {
        return { x: this.coordinate.getX(), y: this.coordinate.getY() };
    }
}
