import { MoveController } from '../../src/controllers/MoveController.ts';
import { Race } from '../../src/models/Race.ts';
import { CarBuilder } from '../models/builders/CarBuilder.ts';
import { RaceBuilder } from '../models/builders/RaceBuilder.ts';
import { CollisionBuilder } from '../models/builders/CollisionBuilder.ts';

let race: Race;
let moveController: MoveController;

beforeEach(() => {
    race = new RaceBuilder().build();
    moveController = new MoveController(race);
});

describe('MoveController', () => {
    it('should move the race', () => {
        const firstPosition = getObjectPosition();
        moveController.control();
        const secondPosition = getObjectPosition();
        const difference = Math.abs(firstPosition - secondPosition);
        expect(difference).toBeGreaterThanOrEqual(MoveController.MIN_AMOUNT);
        expect(difference).toBeLessThanOrEqual(MoveController.MAX_AMOUNT);
    });
});

const getObjectPosition = () => {
    const string = race.getRaceTracks()[0].toString();
    const carPosition = string.indexOf(new CarBuilder().build().value);
    const collisionPosition = string.indexOf(new CollisionBuilder().build().value);
    return Math.max(carPosition, collisionPosition);
};
