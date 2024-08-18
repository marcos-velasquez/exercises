import { BottleNumber } from '../BottleNumber.ts';
import { BottleNumberFactory } from '../BottleNumberFactory.ts';

export class BottleNumber0 extends BottleNumber {
    public getQuantity(): string {
        return 'no more';
    }

    public getAction(): string {
        return 'Go to the store and buy some more';
    }

    public getSuccessor(): BottleNumber {
        return BottleNumberFactory.for(99);
    }

    public static canHandle(number: number): boolean {
        return number === 0;
    }
}
