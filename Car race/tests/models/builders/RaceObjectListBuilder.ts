import { RaceObjectList } from '../../../src/models/RaceObjectList';

export class RaceObjectListBuilder {
    private width = 10;

    public withWidth(width: number) {
        this.width = width;
        return this;
    }

    public withInvalidWidth() {
        this.width = 0;
        return this;
    }

    public build() {
        return new RaceObjectList(this.width);
    }
}
