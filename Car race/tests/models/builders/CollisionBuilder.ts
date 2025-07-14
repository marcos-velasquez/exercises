import { Collision } from '../../../src/models/Collision.ts';
import { RaceObjectBuilder } from './RaceObjectBuilder';

export class CollisionBuilder extends RaceObjectBuilder {
    public build() {
        return new Collision(this.position);
    }
}
