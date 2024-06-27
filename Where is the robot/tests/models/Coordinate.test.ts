import { Coordinate } from '../../src/models/Coordinate';

describe('Coordinate', () => {
    it('should have x and y with values 0 by default', () => {
        const coordinate = new Coordinate();
        expect(coordinate.getX()).toEqual(0);
        expect(coordinate.getY()).toEqual(0);
    });

    it.each([
        { values: { x: 1, y: 1 } },
        { values: { x: 20, y: -10 } },
        { values: { x: 0, y: 2000 } },
        { values: { x: -1444, y: 0 } },
    ])('should increment x and y correctly', ({ values }) => {
        const coordinate = new Coordinate();
        coordinate.incrementX(values.x);
        coordinate.incrementY(values.y);
        expect(coordinate.getX()).toEqual(values.x);
        expect(coordinate.getY()).toEqual(values.y);
    });

    it.each([
        { values: { x: [1, 0, 1], y: [1, 1, 0] }, expected: { x: 2, y: 2 } },
        { values: { x: [100, -250, 10], y: [1021, -1, 0] }, expected: { x: -140, y: 1020 } },
    ])('should increment x and y with secuencial values', ({ values, expected }) => {
        const coordinate = new Coordinate();
        values.x.forEach((x) => coordinate.incrementX(x));
        values.y.forEach((y) => coordinate.incrementY(y));
        expect(coordinate.getX()).toEqual(expected.x);
        expect(coordinate.getY()).toEqual(expected.y);
    });
});
