import { Coordinate } from '../Coordinate.ts';
import { Direction } from '../Direction.ts';

export abstract class DirectionState {
    constructor(protected readonly direction: Direction) {}

    public abstract next(): void;
    public abstract move(coordinate: Coordinate, step: number): void;
}
