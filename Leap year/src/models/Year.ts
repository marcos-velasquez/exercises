export class Year {
    constructor(public readonly value: number) {}
    public isLeapYear(): boolean {
        const isDivisibleBy4 = this.value % 4 === 0;
        const isDivisibleBy100 = this.value % 100 === 0;
        const isDivisibleBy400 = this.value % 400 === 0;

        if (isDivisibleBy4 && ((isDivisibleBy100 && !isDivisibleBy400) || !isDivisibleBy100)) {
            return true;
        }

        return false;
    }
}
