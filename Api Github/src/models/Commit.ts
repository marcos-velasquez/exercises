import assert from 'assert';

export class Commit {
    public readonly date: Date;

    constructor(
        public readonly hash: string,
        public readonly author: string,
        public readonly message: string,
        date: Date | string
    ) {
        assert(date instanceof Date || Date.parse(date), 'Invalid date');
        this.date = new Date(date);
    }

    public toArray() {
        return [this.hash, this.author, this.message, this.date];
    }
}
