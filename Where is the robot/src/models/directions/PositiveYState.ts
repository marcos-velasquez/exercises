import { Coordinate } from '../Coordinate.ts';
import { DirectionState } from './DirectionState.ts';
import { NegativeXState } from './NegativeXState.ts';

export class PositiveYState extends DirectionState {
    public next(): void {
        this.direction.setState(new NegativeXState(this.direction));
    }

    public move(coordinate: Coordinate, step: number): void {
        coordinate.incrementY(step);
    }
}
