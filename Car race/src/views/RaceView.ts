import { MoveController } from '../controllers/MoveController.ts';
import { Race } from '../models/Race.ts';
import { WinnerView } from './WinnerView.ts';

export class RaceView {
    private readonly SPEED = 1000;
    private interval: NodeJS.Timeout | null = null;

    constructor(private readonly race: Race) {}

    public start() {
        this.interval = setInterval(() => {
            console.clear();
            this.race.getRaceTracks().forEach((raceTrack) => console.log(raceTrack.toString()));
            new WinnerView(this.interval as NodeJS.Timeout).check(this.race);
            new MoveController(this.race).control();
        }, this.SPEED);
    }
}
