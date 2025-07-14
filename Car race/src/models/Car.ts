import { RaceObject } from './RaceObject.ts';
import { CarType } from './types/Car.ts';

export class Car extends RaceObject {
    private active = true;

    constructor(carType: CarType) {
        super(carType, 0);
    }

    public isActive() {
        return this.active;
    }

    public crash() {
        this.active = false;
    }

    public repair() {
        this.active = true;
    }
}
