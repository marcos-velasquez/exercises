import { Move } from '../Move.ts';
import { MoveType } from '../types/MoveType.ts';

export class SpockMove extends Move {
    constructor() {
        super(MoveType.SPOCK);
    }

    protected addBeats(): void {
        this.beats.add(MoveType.SCISSOR);
        this.beats.add(MoveType.ROCK);
    }
}
