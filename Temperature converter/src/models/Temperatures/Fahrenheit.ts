export class Fahrenheit {
    constructor(public readonly value: number) {}

    public convertToCelsius() {
        return Number(((this.value - 32) / 1.8).toFixed(1));
    }
}
