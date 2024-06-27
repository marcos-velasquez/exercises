import { Coordinate } from '../Coordinate.ts';
import { DirectionState } from './DirectionState.ts';
import { NegativeYState } from './NegativeYState.ts';

export class NegativeXState extends DirectionState {
    public next(): void {
        this.direction.setState(new NegativeYState(this.direction));
    }

    public move(coordinate: Coordinate, step: number): void {
        coordinate.decrementX(step);
    }
}
