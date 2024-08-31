import { Key } from '../Key.ts';

export class Key0 extends Key {
    constructor() {
        super([]);
    }

    public override convert(_: string): string {
        return ' ';
    }
}
