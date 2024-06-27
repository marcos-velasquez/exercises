import { Coordinate } from './Coordinate.ts';
import { DirectionState } from './directions/DirectionState.ts';
import { PositiveYState } from './directions/PositiveYState.ts';

export class Direction {
    private state = new PositiveYState(this);

    public setState(state: DirectionState) {
        this.state = state;
    }

    public next() {
        this.state.next();
    }

    public move(coordinate: Coordinate, step: number) {
        this.state.move(coordinate, step);
    }
}
