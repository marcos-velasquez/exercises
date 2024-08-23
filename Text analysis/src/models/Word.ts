import assert from 'assert';

export class Word {
    constructor(public readonly value: string) {
        this.value = value.trim();
        assert(this.value.split(' ').length === 1, 'Invalid word');
    }

    public get length() {
        return this.value.length;
    }

    public isSentence() {
        return this.value.includes('.');
    }

    public includes(text: string) {
        return this.value.includes(text);
    }

    public isLengthGreaterThan(length: number) {
        return this.value.length > length;
    }

    public isLengthEqualTo(length: number) {
        return this.value.length === length;
    }

    public isLengthLessThan(length: number) {
        return this.value.length < length;
    }

    public static createFromText(text: string) {
        return text
            .split(' ')
            .map((word) => new Word(word))
            .filter((word) => word.length > 0);
    }
}
