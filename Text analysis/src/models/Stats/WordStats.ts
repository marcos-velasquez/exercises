import { Word } from '../Word.ts';

export class WordStats {
    private stats: Stats = { total: 0, averageLength: 0, longest: [] };

    public incrementTotal() {
        this.stats.total += 1;
    }

    public updateLongest(word: Word) {
        const canPush = this.stats.longest.length === 0 || this.getFirstLongestWord().isLengthEqualTo(word.length);
        if (canPush) {
            this.stats.longest.push(word);
        } else if (this.getFirstLongestWord().isLengthLessThan(word.length)) {
            this.stats.longest = [word];
        }
    }

    public setAverageLength(letterAmount: number) {
        this.stats.averageLength = Number((letterAmount / this.total || 0).toFixed(1));
    }

    private getFirstLongestWord() {
        return this.stats.longest[0];
    }
    public get total() {
        return this.stats.total;
    }

    public get averageLength() {
        return this.stats.averageLength;
    }

    private get longest() {
        return this.stats.longest.map((word) => word.value);
    }

    public values() {
        return { ...this.stats, longest: this.longest };
    }
}

type Stats = { total: number; averageLength: number; longest: Word[] };
