import { EmptyTrack } from '../../../src/models/EmptyTrack.ts';
import { RaceObjectBuilder } from './RaceObjectBuilder.ts';

export class EmptyTrackBuilder extends RaceObjectBuilder {
    public build() {
        return new EmptyTrack(this.position);
    }
}
