export class Calculator {
    public static calculateGCD(a: number, b: number): number {
        while (a !== 0) {
            let temp = b;
            b = a;
            a = temp % a;
        }
        return b;
    }
}
