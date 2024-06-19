import { Army } from '../../../src/models/Army';
import { Race } from '../../../src/models/Race';

export class ArmyBuilder<T extends Race> {
    private readonly army = new Army<T>();

    public add(race: T) {
        this.army.add(race);
    }

    public withTeam(team: T[]) {
        team.forEach((race) => this.add(race));
    }

    public build() {
        return this.army;
    }
}
