import { DownTo } from '../utils/DownTo.ts';
import { VerseTemplateFactory } from './VerseTemplate.ts';

export class CountdownSong {
    constructor(
        private readonly verseTemplateFactory: VerseTemplateFactory,
        private readonly max = 9999,
        private readonly min = 0
    ) {}

    public song(): string {
        return this.verses(this.max, this.min);
    }

    public verses(from: number, to: number): string {
        return new DownTo(from, to)
            .values()
            .map((i) => this.verse(i))
            .join('\n');
    }

    public verse(number: number): string {
        return this.verseTemplateFactory.for(number).lyrics();
    }
}
