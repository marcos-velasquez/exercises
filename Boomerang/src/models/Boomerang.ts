export class Boomerang {
    public static evaluate(array: number[]): number {
        let boomerang = 0;
        for (let i = 0; i < array.length - 2; i++) {
            if (array[i] !== array[i + 1] && array[i] === array[i + 2]) {
                boomerang++;
            }
        }
        return boomerang;
    }
}
