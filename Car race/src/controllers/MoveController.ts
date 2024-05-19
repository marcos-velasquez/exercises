import { Race } from '../models/Race.ts';
import { Random } from '../utils/Random.ts';

export class MoveController {
    public static readonly MIN_AMOUNT = 1;
    public static readonly MAX_AMOUNT = 3;

    constructor(private readonly race: Race) {}

    public control() {
        const amount = Random.number(MoveController.MIN_AMOUNT, MoveController.MAX_AMOUNT);
        this.race.move(amount);
    }
}
