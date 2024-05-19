import { RaceTrack } from '../../../src/models/RaceTrack';
import { CarType } from '../../../src/models/types/Car';
import { CarBuilder } from './CarBuilder';

export class RaceTrackBuilder {
    private raceTrackWidth = 10;
    private carBuilder = new CarBuilder();

    withCarType(carType: CarType) {
        this.carBuilder.withCarType(carType);
        return this;
    }

    withRacetrackWidth(raceTrackWidth: number) {
        this.raceTrackWidth = raceTrackWidth;
        return this;
    }

    withInvalidWidth() {
        this.raceTrackWidth = RaceTrack.MIN_WIDTH - 1;
        return this;
    }

    build(): RaceTrack {
        return new RaceTrack(this.carBuilder.build().value as CarType, this.raceTrackWidth);
    }
}
