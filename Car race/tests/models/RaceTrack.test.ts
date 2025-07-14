import { CarType } from '../../src/models/types/Car';
import { RaceTrackBuilder } from './builders/RaceTrackBuilder';
import { TreeBuilder } from './builders/TreeBuilder';
import { GoalBuilder } from './builders/GoalBuilder';

describe('RaceTrack', () => {
    it('should create an instance', () => {
        expect(new RaceTrackBuilder().build()).toBeTruthy();
    });

    it('should have a red car', () => {
        expect(new RaceTrackBuilder().withCarType(CarType.Red).build().getCar()).toBe(CarType.Red);
    });

    it('give a invalid width when created then should throw an error', () => {
        expect(() => new RaceTrackBuilder().withInvalidWidth().build()).toThrow();
    });

    it('give a with when created then should have at least one tree', () => {
        [3, 4, 5, 6, 7, 8, 9, 10].forEach((width) => {
            const raceTrack = new RaceTrackBuilder().withRacetrackWidth(width).build();
            expect(raceTrack.toString()).toContain(new TreeBuilder().build().value);
        });
    });

    it('give a with when created then should have one goal', () => {
        [3, 4, 5, 6, 7, 8, 9, 10].forEach((width) => {
            const raceTrack = new RaceTrackBuilder().withRacetrackWidth(width).build();
            expect(raceTrack.toString()).toContain(new GoalBuilder().build().value);
        });
    });

    it('give a race track when move then a car should have a new position', () => {
        const raceTrack = new RaceTrackBuilder().build();
        const firstPosition = raceTrack.toString().indexOf(raceTrack.getCar());
        raceTrack.move(1);
        const secondPosition = raceTrack.toString().indexOf(raceTrack.getCar());
        expect(firstPosition).not.toBe(secondPosition);
    });

    it('give a race track when move a invalid amount then should throw an error', () => {
        const raceTrack = new RaceTrackBuilder().build();
        expect(() => raceTrack.move(-1)).toThrow();
    });

    it('give a race track when move to the goal then should win', () => {
        const width = 5;
        const raceTrack = new RaceTrackBuilder().withRacetrackWidth(width).build();
        raceTrack.move(width);
        expect(raceTrack.isWinner()).toBe(true);
    });

    it('give a race track when move to the goal then should not win', () => {
        const width = 5;
        const raceTrack = new RaceTrackBuilder().withRacetrackWidth(width).build();
        raceTrack.move(width / 2);
        expect(raceTrack.isWinner()).toBe(false);
    });

    it('give a race track when move crash car then should not move', () => {
        const raceTrack = new RaceTrackBuilder().withRacetrackWidth(3).build();
        raceTrack.move(1);
        raceTrack.move(1);
        expect(raceTrack.isWinner()).toBe(false);
    });

    it('give a rae track when move car to goal then should win', () => {
        const raceTrack = new RaceTrackBuilder().withRacetrackWidth(3).build();
        raceTrack.move(2);
        expect(raceTrack.isWinner()).toBe(true);
    });
});
