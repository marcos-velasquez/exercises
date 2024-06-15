import { Token, Result, Position } from '../types/index.ts';
import { Board } from './Board.ts';

export class TicTacToeEvaluator {
    constructor(private readonly board: Board) {}

    public evaluate(): Result {
        if (this.board.isFail()) return Result.NONE;

        const xWin = this.hasTicTacToeWin(Token.X);
        const oWin = this.hasTicTacToeWin(Token.O);

        if (xWin && oWin) {
            return Result.NONE;
        }

        return xWin ? Result.X : oWin ? Result.O : Result.TIE;
    }

    private hasTicTacToeWin(token: Token): boolean {
        return Object.values(Position).some((position) => this.board.evaluate(token, position));
    }
}
