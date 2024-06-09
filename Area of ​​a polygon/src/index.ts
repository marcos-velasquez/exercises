import { AreaCalculator } from './models/AreaCalculator.ts';
import { Triangle } from './models/Triangle.ts';
import { Square } from './models/Square.ts';
import { Rectangle } from './models/Rectangle.ts';

(async () => {
    const triangle = new Triangle(20, 50);
    const square = new Square(40);
    const rectangle = new Rectangle(15, 20);

    console.log(
        `The area of the triangle with base ${triangle.base} and height ${triangle.height} is ${AreaCalculator.calculate(triangle)}`
    );

    console.log(`The area of the square with side ${square.side} is ${AreaCalculator.calculate(square)}`);

    console.log(
        `The area of the rectangle with width ${rectangle.width} and height ${rectangle.height} is ${AreaCalculator.calculate(rectangle)}`
    );
})();
