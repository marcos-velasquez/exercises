export class Position {
    constructor(public readonly value: number) {}

    public increment(amount = 1) {
        return new Position(this.value + amount);
    }

    public isEqual(position: Position) {
        return this.value === position.value;
    }

    public isGreaterThanOrEqual(position: Position) {
        return this.value >= position.value;
    }
}
