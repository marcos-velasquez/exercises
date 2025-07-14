import assert from 'assert';
import { CarType } from './types/Car.ts';
import { Car } from './Car.ts';
import { Goal } from './Goal.ts';
import { Tree } from './Tree.ts';
import { Collision } from './Collision.ts';
import { TreeFactory } from './factories/TreeFactory.ts';
import { RaceObjectList } from './RaceObjectList.ts';

export class RaceTrack {
    public static readonly MIN_WIDTH = 3;
    private readonly raceObjectList: RaceObjectList;
    private readonly car: Car;
    private readonly goal: Goal;
    private readonly trees: Tree[];

    constructor(carType: CarType, width: number) {
        assert(width >= RaceTrack.MIN_WIDTH);
        this.raceObjectList = new RaceObjectList(width);
        this.car = new Car(carType);
        this.raceObjectList.setFirst(this.car);
        this.goal = new Goal(this.raceObjectList.lastPosition);
        this.raceObjectList.setLast(this.goal);
        this.trees = new TreeFactory(this.raceObjectList.lastPosition - 1).create();
        this.trees.forEach((tree) => this.raceObjectList.set(tree));
    }

    public move(amount: number) {
        assert(amount > 0);
        if (this.car.isActive()) {
            this.raceObjectList.set(this.car);
            this.raceObjectList.move(this.car.position, amount);
            const isCollision = this.trees.some((tree) => tree.isAtPosition(this.car.position));
            if (isCollision) {
                this.car.crash();
                this.raceObjectList.set(new Collision(this.car.position));
            }
        } else {
            this.car.repair();
        }
    }

    public getCar() {
        return this.car.value;
    }

    public isWinner() {
        return this.car.isPositionGreaterThanOrEqual(this.goal.position);
    }

    public toString(): string {
        return this.raceObjectList.toString();
    }
}
