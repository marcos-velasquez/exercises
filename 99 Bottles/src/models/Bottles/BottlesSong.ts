import { CountdownSong } from '../CountdownSong.ts';
import { BottleVerseTemplateFactory } from './BottleVerseTemplate.ts';

export class BottlesSong extends CountdownSong {
    constructor() {
        super(BottleVerseTemplateFactory, 99, 0);
    }
}
