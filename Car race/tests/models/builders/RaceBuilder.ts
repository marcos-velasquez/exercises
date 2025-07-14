import { Race } from '../../../src/models/Race.ts';
import { RaceTrackBuilder } from './RaceTrackBuilder.ts';

export class RaceBuilder {
    private raceTracks = [new RaceTrackBuilder().build(), new RaceTrackBuilder().build()];

    public withRaceTrack(raceTrack: RaceTrackBuilder) {
        this.raceTracks.push(raceTrack.build());
        return this;
    }
    public build() {
        return new Race(this.raceTracks);
    }
}
