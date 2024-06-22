import assert from 'assert';
import { Celsius } from './Temperatures/Celsius.ts';
import { Fahrenheit } from './Temperatures/Fahrenheit.ts';

export class Temperature {
    public readonly value: string;
    constructor(value: string) {
        this.value = Temperature.getParsedValue(value);
        assert(this.validate(), 'Invalid temperature');
    }

    private validate() {
        return /^-?(?:\d+(?:\.\d{1,2})?)(?:ºC|ºF)$/.test(this.value);
    }

    private static getParsedValue(value: string) {
        return value.replace('c', 'C').replace('f', 'F');
    }

    public convert(): number {
        if (this.isCelsius()) {
            return new Celsius(this.toNumber()).convertToFahrenheit();
        } else {
            return new Fahrenheit(this.toNumber()).convertToCelsius();
        }
    }

    private toNumber() {
        return parseFloat(this.value);
    }

    private isCelsius() {
        return this.value.endsWith('C');
    }
}
