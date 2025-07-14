import { Move } from '../Move.ts';
import { MoveType } from '../types/MoveType.ts';

export class RockMove extends Move {
    constructor() {
        super(MoveType.ROCK);
    }

    protected addBeats(): void {
        this.beats.add(MoveType.SCISSOR);
        this.beats.add(MoveType.LIZARD);
    }
}
