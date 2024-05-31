import assert from 'assert';

export class Factorial {
    public static readonly LIMIT = 20;
    public static calculate(value: number): number {
        assert(value >= 0);
        assert(value <= Factorial.LIMIT);
        if (value === 0 || value === 1) {
            return 1;
        }
        return value * Factorial.calculate(value - 1);
    }
}
