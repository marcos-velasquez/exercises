import { WaterContainer } from '../../src/models/WaterContainer';

describe('WaterContainer', () => {
    it.each([
        { values: [0, 0, 0, 0], expected: 0 },
        { values: [1, 0, 0, 0], expected: 0 },
        { values: [4, 0, 3, 6, 1, 3], expected: 7 },
        { values: [4, 0, 3, 6, 1, 3, 0, 1, 6], expected: 24 },
    ])('should calculate how many units of water are trapped', ({ values, expected }) => {
        expect(WaterContainer.calculateTrappedWaterUnits(values)).toBe(expected);
    });

    it('should return a error when the array contains an number less than 0', () => {
        expect(() => WaterContainer.calculateTrappedWaterUnits([-1, 0, 0, 0])).toThrow();
        expect(() => WaterContainer.calculateTrappedWaterUnits([0, 0, 0, -1])).toThrow();
        expect(() => WaterContainer.calculateTrappedWaterUnits([0, 0, -1, 0, 0])).toThrow();
    });
});
