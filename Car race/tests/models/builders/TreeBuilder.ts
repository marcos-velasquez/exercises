import { Tree } from '../../../src/models/Tree';
import { RaceObjectBuilder } from './RaceObjectBuilder';
export class TreeBuilder extends RaceObjectBuilder {
    public build() {
        return new Tree(this.position);
    }
}
