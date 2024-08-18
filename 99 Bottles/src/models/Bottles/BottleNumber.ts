import { BottleNumberFactory } from './BottleNumberFactory.ts';

export class BottleNumber {
    constructor(private readonly number: number) {}

    public getContainer(): string {
        return 'bottles';
    }

    public getPronoun(): string {
        return 'one';
    }

    public getQuantity(): string {
        return `${this.number}`;
    }

    public getAction(): string {
        return `Take ${this.getPronoun()} down and pass it around`;
    }

    public getSuccessor(): BottleNumber {
        return BottleNumberFactory.for(this.number - 1);
    }

    public static canHandle(_: number): boolean {
        return true;
    }

    public toString(): string {
        return `${this.getQuantity()} ${this.getContainer()}`;
    }
}
