export class Anagram {
    public static isAnagram(a: string, b: string): boolean {
        if (a === b) return false;
        return this.parse(a) === this.parse(b);
    }

    private static parse(value: string): string {
        return value
            .split('')
            .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
            .join('')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    }
}
