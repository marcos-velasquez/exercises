import { Robot } from '../../src/models/Robot';

describe('Robot', () => {
    it.each([
        { steps: [10, 5, -2], expected: { x: -5, y: 12 } },
        { steps: [-10, -5, 2], expected: { x: 5, y: -12 } },
        { steps: [], expected: { x: 0, y: 0 } },
        { steps: [-10, -5, 2, 4, -8], expected: { x: 9, y: -20 } },
    ])('should move correctly', ({ steps, expected }) => {
        const robot = new Robot();
        robot.move(steps);
        expect(robot.whereIs()).toEqual(expected);
    });
});
