export class Expression {
    private readonly openBrackets = ['{', '[', '('];
    private readonly closeBrackets = ['}', ']', ')'];

    constructor(public readonly value: string) {}

    public isBalanced(): boolean {
        const bracketStack: string[] = [];

        for (const char of this.value) {
            if (this.openBrackets.includes(char)) {
                bracketStack.push(char);
            } else if (this.closeBrackets.includes(char)) {
                const index = this.closeBrackets.indexOf(char);
                if (bracketStack[bracketStack.length - 1] !== this.openBrackets[index]) {
                    return false;
                }
                bracketStack.pop();
            }
        }

        return bracketStack.length === 0;
    }
}
