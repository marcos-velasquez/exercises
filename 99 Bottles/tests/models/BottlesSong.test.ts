import { BottlesSong } from '../../src/models/Bottles/BottlesSong';
import { song } from '../constants/song';

describe('BottlesSong', () => {
    test('a couple verses', () => {
        const expected =
            '99 bottles of beer on the wall, ' +
            '99 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '98 bottles of beer on the wall.\n' +
            '\n' +
            '98 bottles of beer on the wall, ' +
            '98 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '97 bottles of beer on the wall.\n';
        expect(new BottlesSong().verses(99, 98)).toBe(expected);
    });

    test('a few verses', () => {
        const expected =
            '2 bottles of beer on the wall, ' +
            '2 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '1 bottle of beer on the wall.\n' +
            '\n' +
            '1 bottle of beer on the wall, ' +
            '1 bottle of beer.\n' +
            'Take it down and pass it around, ' +
            'no more bottles of beer on the wall.\n' +
            '\n' +
            'No more bottles of beer on the wall, ' +
            'no more bottles of beer.\n' +
            'Go to the store and buy some more, ' +
            '99 bottles of beer on the wall.\n';
        expect(new BottlesSong().verses(2, 0)).toBe(expected);
    });

    test('the whole song', () => {
        expect(new BottlesSong().song()).toEqual(song);
    });
});
