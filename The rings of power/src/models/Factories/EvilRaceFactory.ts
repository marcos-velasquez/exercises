import { EvilRace } from '../Race.ts';
import { teamEvil } from '../types/EvilTeam.ts';
import { RaceFactory } from './RaceFactory.ts';

export class EvilRaceFactory extends RaceFactory<EvilRace> {
    constructor() {
        super(teamEvil());
    }
}
