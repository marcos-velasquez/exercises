import { Tennis } from '../../src/models/Tennis.ts';
import { sequence } from './data/sequence.ts';

describe('Tennis', () => {
    it('should be created correctly with 2 players', () => {
        expect(Tennis.create('player1', 'player2')).toBeInstanceOf(Tennis);
    });

    it.each(sequence)('should return the score history correctly', ({ sequence, expected }) => {
        const game = Tennis.create('player1', 'player2');
        expect(game.play(sequence)).toEqual(expected);
    });

    it('should return a error if a player name is not valid', () => {
        const game = Tennis.create('player1', 'player2');
        expect(() => game.play(['player3'])).toThrow();
    });
});
