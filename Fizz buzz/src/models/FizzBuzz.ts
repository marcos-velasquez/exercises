export class FizzBuzz {
    public static convert(input: number): string | number {
        const isMultipleOfThree = input % 3 === 0;
        const isMultipleOfFive = input % 5 === 0;

        if (isMultipleOfFive && isMultipleOfThree) {
            return 'fizzbuzz';
        }

        if (isMultipleOfThree) {
            return 'fizz';
        }

        if (isMultipleOfFive) {
            return 'buzz';
        }

        return input;
    }
}
