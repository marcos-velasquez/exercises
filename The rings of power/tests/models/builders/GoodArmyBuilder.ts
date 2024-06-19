import { GoodRace } from '../../../src/models/Race';
import { Elf, Peloso } from '../../../src/models/Races/Good';
import { teamGood } from '../../../src/models/types/GoodTeam';
import { ArmyBuilder } from './ArmyBuilder';

export class GoodArmyBuilder extends ArmyBuilder<GoodRace> {
    public withTheWeakest() {
        this.add(new Peloso());
        return this;
    }

    public withTheStrongest() {
        this.add(new Elf());
        return this;
    }

    public withFullTeam() {
        this.withTeam(teamGood());
        return this;
    }
}
