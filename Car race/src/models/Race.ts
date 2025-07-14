import { RaceTrack } from './RaceTrack.ts';

export class Race {
    constructor(private readonly raceTracks: RaceTrack[]) {}

    public getRaceTracks() {
        return this.raceTracks;
    }

    public move(amount: number) {
        this.raceTracks.forEach((raceTrack) => raceTrack.move(amount));
    }

    public getWinners() {
        return this.raceTracks
            .filter((raceTrack) => raceTrack.isWinner())
            .map((raceTrack) => raceTrack.getCar())
            .join(' ');
    }

    public hasWinner() {
        return this.raceTracks.some((raceTrack) => raceTrack.isWinner());
    }
}
