import { Board } from '../../src/models/Board';
import { Token } from '../../src/types/Token';

export class BoardBuilder {
    public static emptyBoard(): Board {
        return new Board([
            [Token.EMPTY, Token.EMPTY, Token.EMPTY],
            [Token.EMPTY, Token.EMPTY, Token.EMPTY],
            [Token.EMPTY, Token.EMPTY, Token.EMPTY],
        ]);
    }

    public static withWinningTokenOnMainDiagonal(token: Token): Board {
        return new Board([
            [token, Token.EMPTY, Token.EMPTY],
            [Token.EMPTY, token, Token.EMPTY],
            [Token.EMPTY, Token.EMPTY, token],
        ]);
    }

    public static withWinningTokenOnSecondaryDiagonal(token: Token): Board {
        return new Board([
            [Token.EMPTY, Token.EMPTY, token],
            [Token.EMPTY, token, Token.EMPTY],
            [token, Token.EMPTY, Token.EMPTY],
        ]);
    }

    public static withWinningTokenOnHorizontal(token: Token): Board {
        return new Board([
            [token, token, token],
            [Token.EMPTY, Token.EMPTY, Token.EMPTY],
            [Token.EMPTY, Token.EMPTY, Token.EMPTY],
        ]);
    }

    public static withWinningTokenOnVertical(token: Token): Board {
        return new Board([
            [Token.EMPTY, token, Token.EMPTY],
            [Token.EMPTY, token, Token.EMPTY],
            [Token.EMPTY, token, Token.EMPTY],
        ]);
    }

    public static withWinningAllTokens(): Board {
        return new Board([
            [Token.X, Token.O, Token.X],
            [Token.X, Token.O, Token.O],
            [Token.X, Token.O, Token.O],
        ]);
    }

    public static withTie(): Board {
        return new Board([
            [Token.X, Token.O, Token.X],
            [Token.O, Token.X, Token.O],
            [Token.O, Token.X, Token.O],
        ]);
    }

    public static withIncorrectRowBoard(): Board {
        return new Board([
            [Token.X, Token.O, Token.X],
            [Token.O, Token.X, Token.O],
        ]);
    }

    public static withIncorrectColumnBoard(): Board {
        return new Board([
            [Token.X, Token.O],
            [Token.O, Token.X],
            [Token.O, Token.X],
        ]);
    }
}
