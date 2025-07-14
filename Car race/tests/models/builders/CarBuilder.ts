import { Car } from '../../../src/models/Car';
import { CarType } from '../../../src/models/types/Car';
import { RaceObjectBuilder } from './RaceObjectBuilder';

export class CarBuilder extends RaceObjectBuilder {
    private carType = CarType.Blue;

    withCarType(carType: CarType) {
        this.carType = carType;
        return this;
    }

    public build() {
        return new Car(this.carType);
    }
}
