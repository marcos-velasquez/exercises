import assert from 'assert';

export class Expression {
    constructor(public readonly value: string) {
        assert(this.validate(), 'Invalid expression');
    }

    public evaluate(): number {
        return eval(this.value);
    }

    private validate() {
        return /^\d+(\s*[+\-*/]\s*\d+)*$/.test(this.value);
    }
}
