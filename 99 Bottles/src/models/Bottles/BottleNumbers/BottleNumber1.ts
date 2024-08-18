import { BottleNumber } from '../BottleNumber.ts';
import { BottleNumberFactory } from '../BottleNumberFactory.ts';

export class BottleNumber1 extends BottleNumber {
    public getContainer(): string {
        return 'bottle';
    }

    public getPronoun(): string {
        return 'it';
    }

    public static canHandle(number: number): boolean {
        return number === 1;
    }
}
