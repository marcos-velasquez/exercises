import { Move } from '../Move.ts';
import { MoveType } from '../types/MoveType.ts';

export class LizardMove extends Move {
    constructor() {
        super(MoveType.LIZARD);
    }

    protected addBeats(): void {
        this.beats.add(MoveType.SPOCK);
        this.beats.add(MoveType.PAPER);
    }
}
