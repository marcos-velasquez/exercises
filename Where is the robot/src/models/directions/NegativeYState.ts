import { Coordinate } from '../Coordinate.ts';
import { DirectionState } from './DirectionState.ts';
import { PositiveXState } from './PositiveXState.ts';

export class NegativeYState extends DirectionState {
    public next(): void {
        this.direction.setState(new PositiveXState(this.direction));
    }

    public move(coordinate: Coordinate, step: number): void {
        coordinate.decrementY(step);
    }
}
