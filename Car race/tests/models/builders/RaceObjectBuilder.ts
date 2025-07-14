import { RaceObject } from '../../../src/models/RaceObject';

export abstract class RaceObjectBuilder {
    protected position = 0;

    public withPosition(position: number) {
        this.position = position;
        return this;
    }

    public abstract build(): RaceObject;
}
