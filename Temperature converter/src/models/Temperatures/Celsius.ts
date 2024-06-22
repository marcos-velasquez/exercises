export class Celsius {
    constructor(public readonly value: number) {}

    public convertToFahrenheit() {
        return Number((this.value * 1.8 + 32).toFixed(1));
    }
}
