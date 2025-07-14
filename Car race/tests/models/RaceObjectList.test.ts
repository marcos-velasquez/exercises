import { RaceObjectListBuilder } from './builders/RaceObjectListBuilder';
import { CarBuilder } from './builders/CarBuilder';
import { TreeBuilder } from './builders/TreeBuilder';

describe('RaceObjectList', () => {
    it('should create an instance', () => {
        expect(new RaceObjectListBuilder().build()).toBeTruthy();
    });

    it('give a invalid width when created then should throw an error', () => {
        expect(() => new RaceObjectListBuilder().withInvalidWidth().build()).toThrow();
    });

    it('give a with when get last position then should return the last position', () => {
        [3, 4, 5, 6, 7, 8, 9, 10].forEach((width) => {
            const raceObjectList = new RaceObjectListBuilder().withWidth(width).build();
            expect(raceObjectList.lastPosition).toBe(width - 1);
        });
    });

    it('give a race object list when set object then should contain the object', () => {
        const raceObjectList = new RaceObjectListBuilder().build();
        const tree = new TreeBuilder().withPosition(3).build();
        raceObjectList.set(tree);
        expect(raceObjectList.toString()).toContain(tree.value);
    });

    it('give a race object list when move object then should obtain the new position', () => {
        const raceObjectList = new RaceObjectListBuilder().build();
        const car = new CarBuilder().build();
        raceObjectList.setFirst(car);
        raceObjectList.move(car.position, 4);
        expect(car.position).toBe(4);
    });
});
