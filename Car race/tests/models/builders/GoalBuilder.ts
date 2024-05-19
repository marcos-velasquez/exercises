import { Goal } from '../../../src/models/Goal';
import { RaceObjectBuilder } from './RaceObjectBuilder';

export class GoalBuilder extends RaceObjectBuilder {
    public build() {
        return new Goal(this.position);
    }
}
