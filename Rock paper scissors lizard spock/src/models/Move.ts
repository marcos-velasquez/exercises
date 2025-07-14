import { MoveType } from './types/MoveType.ts';

export abstract class Move {
    protected readonly beats = new Set<MoveType>();

    constructor(public readonly value: MoveType) {
        this.addBeats();
    }

    protected abstract addBeats(): void;

    public vs(move: Move): boolean {
        return this.beats.has(move.value);
    }
}
