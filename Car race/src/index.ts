import { Race } from './models/Race.ts';
import { RaceTrack } from './models/RaceTrack.ts';
import { CarType } from './models/types/Car.ts';
import { RaceView } from './views/RaceView.ts';

const RACE_TRACK_WIDTH = 10;

(() => {
    const blueRaceTrack = new RaceTrack(CarType.Blue, RACE_TRACK_WIDTH);
    const redRaceTrack = new RaceTrack(CarType.Red, RACE_TRACK_WIDTH);
    const race = new Race([blueRaceTrack, redRaceTrack]);
    new RaceView(race).start();
})();
