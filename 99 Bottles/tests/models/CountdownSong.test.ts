import { CountdownSong } from '../../src/models/CountdownSong';

const stubVerseTemplateFactory = { for: (number: number) => ({ lyrics: () => `This is verse ${number}.` }) };

describe('CountdownSong', () => {
    test('should return a verse', () => {
        const expected = 'This is verse 600.';
        expect(new CountdownSong(stubVerseTemplateFactory).verse(600)).toEqual(expected);
    });

    test('should return a verses', () => {
        const expected = 'This is verse 99.' + '\n' + 'This is verse 98.' + '\n' + 'This is verse 97.';
        expect(new CountdownSong(stubVerseTemplateFactory).verses(99, 97)).toEqual(expected);
    });

    test('should return the whole song', () => {
        const expected =
            'This is verse 88.' +
            '\n' +
            'This is verse 87.' +
            '\n' +
            'This is verse 86.' +
            '\n' +
            'This is verse 85.' +
            '\n' +
            'This is verse 84.' +
            '\n' +
            'This is verse 83.' +
            '\n' +
            'This is verse 82.' +
            '\n' +
            'This is verse 81.' +
            '\n' +
            'This is verse 80.' +
            '\n' +
            'This is verse 79.' +
            '\n' +
            'This is verse 78.' +
            '\n' +
            'This is verse 77.';

        expect(new CountdownSong(stubVerseTemplateFactory, 88, 77).song()).toEqual(expected);
    });
});
