import { Key } from './Key.ts';
import { Key0 } from './keys/Key0.ts';
import { Key1 } from './keys/Key1.ts';
import { Key2 } from './keys/Key2.ts';
import { Key3 } from './keys/key3.ts';
import { Key4 } from './keys/Key4.ts';
import { Key5 } from './keys/Key5.ts';
import { Key6 } from './keys/Key6.ts';
import { Key7 } from './keys/Key7.ts';
import { Key8 } from './keys/Key8.ts';
import { Key9 } from './keys/Key9.ts';

export class T9Keyboard {
    private keys: Key[] = [];

    constructor() {
        this.keys = [
            new Key0(),
            new Key1(),
            new Key2(),
            new Key3(),
            new Key4(),
            new Key5(),
            new Key6(),
            new Key7(),
            new Key8(),
            new Key9(),
        ];
    }

    public convert(input: string): string {
        let text = '';
        for (let word of input.split('-')) {
            const [first] = word;

            text += this.keys[Number(first)].convert(word);
        }
        return text;
    }
}
