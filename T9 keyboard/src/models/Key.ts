export abstract class Key {
    constructor(private readonly characters: string[]) {}

    public convert(input: string): string {
        let character = this.characters[input.length - 1];
        if (!character) {
            character = this.convert(input.slice(this.characters.length));
        }
        return character;
    }
}
