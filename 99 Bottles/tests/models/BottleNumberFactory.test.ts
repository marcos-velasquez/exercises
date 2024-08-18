import { BottleNumberFactory } from '../../src/models/Bottles/BottleNumberFactory';
import { BottleNumber } from '../../src/models/Bottles/BottleNumber';
import { BottleNumber0 } from '../../src/models/Bottles/BottleNumbers/BottleNumber0';
import { BottleNumber1 } from '../../src/models/Bottles/BottleNumbers/BottleNumber1';
import { BottleNumber6 } from '../../src/models/Bottles/BottleNumbers/BottleNumber6';

describe('BottleNumberFactory', () => {
    test('should return a subclass of BottleNumber', () => {
        expect(BottleNumberFactory.for(0)).toBeInstanceOf(BottleNumber0);
        expect(BottleNumberFactory.for(1)).toBeInstanceOf(BottleNumber1);
        expect(BottleNumberFactory.for(6)).toBeInstanceOf(BottleNumber6);
    });

    test('should return a BottleNumber', () => {
        expect(BottleNumberFactory.for(10)).toBeInstanceOf(BottleNumber);
        expect(BottleNumberFactory.for(100)).toBeInstanceOf(BottleNumber);
        expect(BottleNumberFactory.for(50)).toBeInstanceOf(BottleNumber);
    });
});
