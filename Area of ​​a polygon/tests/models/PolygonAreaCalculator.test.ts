import { AreaCalculator } from '../../src/models/AreaCalculator.ts';
import { Triangle } from '../../src/models/Triangle.ts';
import { Square } from '../../src/models/Square.ts';
import { Rectangle } from '../../src/models/Rectangle.ts';

describe('AreaCalculator', () => {
    it.each([
        { base: 10, height: 10 },
        { base: 10, height: 1 },
        { base: 1, height: 1 },
        { base: 20, height: 5000 },
    ])('should calculate the area of a triangle with base $base and height $height', ({ base, height }) => {
        const triangle = new Triangle(base, height);
        expect(AreaCalculator.calculate(triangle)).toBe((base * height) / 2);
    });

    it.each([{ side: 10 }, { side: 1 }, { side: 1000 }])(
        'should calculate the area of a square with side $side',
        ({ side }) => {
            const square = new Square(side);
            expect(AreaCalculator.calculate(square)).toEqual(side * side);
        }
    );

    it.each([
        { width: 10, height: 10 },
        { width: 1, height: 1 },
        { width: 1000, height: 1000 },
    ])('should calculate the area of a rectangle with width $width and height $height', ({ width, height }) => {
        const rectangle = new Rectangle(width, height);
        expect(AreaCalculator.calculate(rectangle)).toBe(width * height);
    });

    it.each([
        { base: 0, height: 10 },
        { base: 10, height: -1 },
    ])('should throw an error if the base or height of a triangle is less than or equal to 0', ({ base, height }) => {
        expect(() => new Triangle(base, height)).toThrow();
    });

    it('should throw an error if the side of a square is less than or equal to 0', () => {
        expect(() => new Square(0)).toThrow();
    });

    it.each([
        { width: 0, height: 10 },
        { width: 10, height: -1 },
    ])(
        'should throw an error if the width or height of a rectangle is less than or equal to 0',
        ({ width, height }) => {
            expect(() => new Rectangle(width, height)).toThrow();
        }
    );
});
