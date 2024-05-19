import assert from 'assert';
import { EmptyTrack } from './EmptyTrack.ts';
import { RaceObject } from './RaceObject.ts';

export class RaceObjectList {
    private readonly objects: RaceObject[];

    constructor(width: number) {
        assert(width > 0);
        this.objects = new Array(width).fill(null).map((_, index) => new EmptyTrack(index));
    }

    private get(index: number) {
        return this.objects[index];
    }

    public get lastPosition() {
        return this.objects.length - 1;
    }

    public set(object: RaceObject) {
        this.objects[object.position] = object;
    }

    public setFirst(object: RaceObject) {
        this.objects[0] = object;
    }

    public setLast(object: RaceObject) {
        this.objects[this.lastPosition] = object;
    }

    public move(index: number, amount: number) {
        const object = this.get(index);
        object.increment(amount);
        this.set(object);
        this.setEmpty(index);
    }

    private setEmpty(index: number) {
        this.objects[index] = new EmptyTrack(index);
    }

    public toString() {
        return this.objects
            .toReversed()
            .map((object) => object.value)
            .join('');
    }
}
