import assert from 'assert';

export class Word {
    public static createNormalize(value: string) {
        return new Word(value).normalize();
    }

    constructor(public readonly value: string) {
        assert(value, 'Word cannot be empty');
    }

    public normalize() {
        return new Word(
            this.value
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]/g, '')
        );
    }
}
