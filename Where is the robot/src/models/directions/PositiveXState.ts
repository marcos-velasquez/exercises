import { Coordinate } from '../Coordinate.ts';
import { DirectionState } from './DirectionState.ts';
import { PositiveYState } from './PositiveYState.ts';

export class PositiveXState extends DirectionState {
    public next(): void {
        this.direction.setState(new PositiveYState(this.direction));
    }

    public move(coordinate: Coordinate, step: number): void {
        coordinate.incrementX(step);
    }
}
