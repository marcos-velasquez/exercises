import { Token } from './types/Token.ts';
import { Board } from './models/Board.ts';
import { TicTacToeEvaluator } from './models/TicTacToeEvaluator.ts';

(async () => {
    const board = new Board([
        [Token.X, Token.X, Token.X],
        [Token.EMPTY, Token.O, Token.O],
        [Token.EMPTY, Token.O, Token.EMPTY],
    ]);
    const ticTacToeEvaluator = new TicTacToeEvaluator(board);

    console.log('The result is: ' + ticTacToeEvaluator.evaluate());
})();
