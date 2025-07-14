import { PascalTriangle } from './models/PascalTriangle.ts';
import { PascalTriangleView } from './views/PascalTriangleView.ts';

(async () => {
    const pascalTriangle = new PascalTriangle(5);
    new PascalTriangleView(pascalTriangle).print();
})();
