import assert from 'assert';

export class Name {
    public readonly name: string;

    constructor(name: string) {
        assert(/^[A-Za-z]*$/.test(name), 'Invalid name');
        this.name = name.toUpperCase();
    }

    public get length() {
        return this.name.length;
    }

    public getCharCodeAt(i: number) {
        return this.name.charCodeAt(i);
    }
}
