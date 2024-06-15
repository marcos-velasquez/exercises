import { Token } from '../types/Token.ts';
export class Board {
    private static readonly MIN_BOARD_SIZE = 3;

    constructor(private readonly board: Token[][]) {}

    public evaluate(token: Token, positions: number[][]): boolean {
        return positions.every((position) => this.board[position[0]][position[1]] === token);
    }

    public isOk(): boolean {
        return (
            this.board.length === Board.MIN_BOARD_SIZE && this.board.every((row) => row.length === Board.MIN_BOARD_SIZE)
        );
    }

    public isFail(): boolean {
        return !this.isOk();
    }
}
