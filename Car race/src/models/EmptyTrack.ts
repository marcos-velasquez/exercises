import { RaceObject } from './RaceObject.ts';

export class EmptyTrack extends RaceObject {
    constructor(position: number) {
        super('_', position);
    }
}
