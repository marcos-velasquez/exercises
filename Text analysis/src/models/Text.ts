import { Word } from './Word.ts';
import { Letter } from './Letter.ts';
import { WordStats } from './Stats/WordStats.ts';
import { SentenceStats } from './Stats/SentenceStats.ts';

export class Text {
    private readonly wordStats = new WordStats();
    private readonly sentenceStats = new SentenceStats();

    constructor(public readonly text: string) {
        const words = Word.createFromText(this.text);
        for (const word of words) {
            this.wordStats.incrementTotal();
            this.sentenceStats.incrementTotalIf(word.isSentence());
            this.wordStats.updateLongest(word);
        }
        this.wordStats.setAverageLength(Letter.count(this.text));
    }

    public get words() {
        return this.wordStats.values();
    }

    public get sentences() {
        return this.sentenceStats.values();
    }
}
