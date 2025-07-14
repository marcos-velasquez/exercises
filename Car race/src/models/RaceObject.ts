import { Position } from './Position.ts';

export abstract class RaceObject {
    public readonly value: string;
    private _position: Position;

    constructor(value: string, position: number) {
        this._position = new Position(position);
        this.value = value;
    }

    public get position() {
        return this._position.value;
    }

    public setPosition(position: number) {
        this._position = new Position(position);
    }

    public increment(amount: number) {
        this._position = this._position.increment(amount);
    }

    public isAtPosition(position: number) {
        return this._position.isEqual(new Position(position));
    }

    public isPositionGreaterThanOrEqual(position: number) {
        return this._position.isGreaterThanOrEqual(new Position(position));
    }
}
