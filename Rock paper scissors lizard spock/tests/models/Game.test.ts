import { Game } from '../../src/models/Game.ts';
import { Player } from '../../src/models/Player.ts';
import { scissor, rock } from '../../src/models/factories/MoveFactory.ts';
import { moves } from '../data/moves.ts';

let player1: Player;
let player2: Player;
let game: Game;

beforeEach(() => {
    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
    game = new Game(player1, player2);
});

describe('Game', () => {
    it.each(moves)('should return $expected when moves is passed', ({ moves, expected }) => {
        expect(game.calculate(moves)).toEqual(expected);
    });

    it('should return a error when an empty array is passed', () => {
        expect(() => game.calculate([])).toThrow();
        expect(() => game.calculate([[]])).toThrow();
        expect(() => game.calculate([[scissor]])).toThrow();
        expect(() => game.calculate([[scissor, rock], []])).toThrow();
    });
});
