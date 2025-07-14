import { Name } from './Name.ts';

export class Excel {
    public static columnNumber(name: string) {
        const value = new Name(name);
        let number = 0;
        const CHAR_CODE_OFFSET = 64;
        const BASE_ALPHABET_SIZE = 26;
        for (let i = 0; i < value.length; i++) {
            number +=
                (value.getCharCodeAt(i) - CHAR_CODE_OFFSET) * Math.pow(BASE_ALPHABET_SIZE, value.length - (i + 1));
        }
        return number;
    }
}
