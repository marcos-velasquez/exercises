import { RaceObject } from './RaceObject.ts';

export class Collision extends RaceObject {
    constructor(position: number) {
        super('💥', position);
    }
}
