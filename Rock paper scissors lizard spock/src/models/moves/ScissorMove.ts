import { Move } from '../Move.ts';
import { MoveType } from '../types/MoveType.ts';

export class ScissorMove extends Move {
    constructor() {
        super(MoveType.SCISSOR);
    }

    protected addBeats(): void {
        this.beats.add(MoveType.PAPER);
        this.beats.add(MoveType.LIZARD);
    }
}
