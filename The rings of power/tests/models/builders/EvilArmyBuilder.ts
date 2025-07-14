import { EvilRace } from '../../../src/models/Race';
import { Orc, Troll } from '../../../src/models/Races/Evil';
import { teamEvil } from '../../../src/models/types/EvilTeam';
import { ArmyBuilder } from './ArmyBuilder';

export class EvilArmyBuilder extends ArmyBuilder<EvilRace> {
    public withTheWeakest() {
        this.add(new Orc());
        return this;
    }

    public withTheStrongest() {
        this.add(new Troll());
        return this;
    }

    public withFullTeam() {
        this.withTeam(teamEvil());
        return this;
    }
}
