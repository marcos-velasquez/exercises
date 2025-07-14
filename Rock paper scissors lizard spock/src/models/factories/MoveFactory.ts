import { ScissorMove } from '../moves/ScissorMove.ts';
import { RockMove } from '../moves/RockMove.ts';
import { PaperMove } from '../moves/PaperMove.ts';
import { SpockMove } from '../moves/SpockMove.ts';
import { LizardMove } from '../moves/LizardMove.ts';

export class MoveFactory {
    public static readonly scissor = new ScissorMove();
    public static readonly rock = new RockMove();
    public static readonly paper = new PaperMove();
    public static readonly spock = new SpockMove();
    public static readonly lizard = new LizardMove();
}

export const scissor = MoveFactory.scissor;
export const rock = MoveFactory.rock;
export const paper = MoveFactory.paper;
export const spock = MoveFactory.spock;
export const lizard = MoveFactory.lizard;
