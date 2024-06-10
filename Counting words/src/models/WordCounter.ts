import { Word } from './Word.ts';

export class WordCounter {
    private readonly words: Word[] = [];
    constructor(private readonly phrase: string) {
        this.words = phrase.split(' ').map((word) => Word.createNormalize(word));
    }

    public execute() {
        const countedWords = this.words.reduce((acc: Record<string, number>, word: Word) => {
            acc[word.value] = (acc[word.value] || 0) + 1;
            return acc;
        }, {});
        return countedWords;
    }
}
