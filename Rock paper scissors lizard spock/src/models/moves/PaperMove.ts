import { Move } from '../Move.ts';
import { MoveType } from '../types/MoveType.ts';

export class PaperMove extends Move {
    constructor() {
        super(MoveType.PAPER);
    }

    protected addBeats(): void {
        this.beats.add(MoveType.ROCK);
        this.beats.add(MoveType.SPOCK);
    }
}
