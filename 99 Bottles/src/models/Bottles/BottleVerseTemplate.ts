import { capitalize } from '../../utils/Capitalize.ts';
import { BottleNumber } from '../Bottles/BottleNumber.ts';
import { BottleNumberFactory } from './BottleNumberFactory.ts';
import { VerseTemplate, VerseTemplateFactory } from '../VerseTemplate.ts';

class BottleVerseTemplate extends VerseTemplate {
    constructor(protected readonly bottleNumber: BottleNumber) {
        super();
    }

    public lyrics(): string {
        return (
            capitalize(`${this.bottleNumber} `) +
            'of beer on the wall, ' +
            `${this.bottleNumber} of beer.\n` +
            `${this.bottleNumber.getAction()}, ` +
            `${this.bottleNumber.getSuccessor()} of beer on the wall.\n`
        );
    }
}

export const BottleVerseTemplateFactory: VerseTemplateFactory = {
    for: (number: number) => new BottleVerseTemplate(BottleNumberFactory.for(number)),
};
