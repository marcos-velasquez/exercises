import { GoodRace } from '../Race.ts';
import { teamGood } from '../types/GoodTeam.ts';
import { RaceFactory } from './RaceFactory.ts';

export class GoodRaceFactory extends RaceFactory<GoodRace> {
    constructor() {
        super(teamGood());
    }
}
