import { Token } from '../src/types/Token';
import { Result } from '../src/types/Result';
import { BoardBuilder } from './builders/BoardBuilder';
import { TicTacToeEvaluator } from '../src/models/TicTacToeEvaluator';

describe('TicTacToeEvaluator', () => {
    it.each([
        [BoardBuilder.withWinningTokenOnMainDiagonal(Token.X), Result.X],
        [BoardBuilder.withWinningTokenOnMainDiagonal(Token.O), Result.O],
    ])('should return token if there is a winner on main diagonal', (board, expected) => {
        expect(new TicTacToeEvaluator(board).evaluate()).toBe(expected);
    });

    it.each([
        [BoardBuilder.withWinningTokenOnSecondaryDiagonal(Token.X), Result.X],
        [BoardBuilder.withWinningTokenOnSecondaryDiagonal(Token.O), Result.O],
    ])('should return token if there is a winner on secondary diagonal', (board, expected) => {
        expect(new TicTacToeEvaluator(board).evaluate()).toBe(expected);
    });

    it.each([
        [BoardBuilder.withWinningTokenOnHorizontal(Token.X), Result.X],
        [BoardBuilder.withWinningTokenOnHorizontal(Token.O), Result.O],
    ])('should return token if there is a winner on horizontal', (board, expected) => {
        expect(new TicTacToeEvaluator(board).evaluate()).toBe(expected);
    });

    it.each([
        [BoardBuilder.withWinningTokenOnVertical(Token.X), Result.X],
        [BoardBuilder.withWinningTokenOnVertical(Token.O), Result.O],
    ])('should return token if there is a winner on vertical', (board, expected) => {
        expect(new TicTacToeEvaluator(board).evaluate()).toBe(expected);
    });

    it('should return Tie if there is a tie', () => {
        expect(new TicTacToeEvaluator(BoardBuilder.withTie()).evaluate()).toBe(Result.TIE);
    });

    it.each([[BoardBuilder.withIncorrectRowBoard()], [BoardBuilder.withIncorrectColumnBoard()]])(
        'should return NONE if the board is incorrect',
        (board) => {
            expect(new TicTacToeEvaluator(board).evaluate()).toBe(Result.NONE);
        }
    );

    it('should return NONE if winning all tokens', () => {
        expect(new TicTacToeEvaluator(BoardBuilder.withWinningAllTokens()).evaluate()).toBe(Result.NONE);
    });
});
