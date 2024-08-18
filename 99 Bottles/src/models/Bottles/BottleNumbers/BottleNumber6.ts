import { BottleNumber } from '../BottleNumber.ts';
import { BottleNumberFactory } from '../BottleNumberFactory.ts';

export class BottleNumber6 extends BottleNumber {
    public getContainer(): string {
        return 'six-pack';
    }

    public getQuantity(): string {
        return '1';
    }

    public static canHandle(number: number): boolean {
        return number === 6;
    }
}
