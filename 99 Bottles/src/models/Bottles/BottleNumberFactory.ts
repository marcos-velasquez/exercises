import { BottleNumber } from './BottleNumber.ts';
import { BottleNumber0 } from './BottleNumbers/BottleNumber0.ts';
import { BottleNumber1 } from './BottleNumbers/BottleNumber1.ts';
import { BottleNumber6 } from './BottleNumbers/BottleNumber6.ts';

export class BottleNumberFactory {
    private static bottleNumberClasses: (typeof BottleNumber)[] = [];

    public static register(bottleNumberClass: typeof BottleNumber) {
        this.bottleNumberClasses.push(bottleNumberClass);
    }

    public static for(number: number): BottleNumber {
        const bottleNumberClass =
            this.bottleNumberClasses.find((BottleNumberClass) => BottleNumberClass.canHandle(number)) ?? BottleNumber;
        return new bottleNumberClass(number);
    }
}

BottleNumberFactory.register(BottleNumber0);
BottleNumberFactory.register(BottleNumber1);
BottleNumberFactory.register(BottleNumber6);
