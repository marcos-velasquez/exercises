import { Race } from '../models/Race.ts';

export class WinnerView {
    constructor(private readonly interval: NodeJS.Timeout) {}

    public check(race: Race) {
        if (race.hasWinner()) {
            console.log('\n');
            console.log('Winner/s:', race.getWinners());
            clearInterval(this.interval);
        }
    }
}
