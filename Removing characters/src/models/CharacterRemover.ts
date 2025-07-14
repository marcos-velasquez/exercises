export class CharacterRemover {
    constructor(
        private readonly str1: string,
        private readonly str2: string
    ) {}

    public execute(): { out1: string; out2: string } {
        const out1 = this.filter(this.str1, (char) => !this.str2.includes(char));
        const out2 = this.filter(this.str2, (char) => !this.str1.includes(char));
        return { out1, out2 };
    }

    private filter(str: string, predicate: (char: string) => boolean): string {
        return str.split('').filter(predicate).join('');
    }
}
