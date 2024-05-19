import { RaceObject } from './RaceObject.ts';

export class Goal extends RaceObject {
    constructor(position: number) {
        super('🏁', position);
    }
}
