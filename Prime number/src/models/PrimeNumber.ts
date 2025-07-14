export class PrimeNumber {
    constructor(private readonly value: number) {}

    public isPrime(): boolean {
        if(this.value <= 1) return false;

        for (let i = 2; i < this.value; i++) {
            if (this.isDivisibleBy(i)) {
                return false;
            }
        }
        
        return true;
    }

    private isDivisibleBy(divisor: number): boolean {
        return this.value % divisor === 0;
    }
}