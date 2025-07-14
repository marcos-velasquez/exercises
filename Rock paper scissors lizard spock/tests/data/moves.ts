import { scissor, rock, lizard, spock, paper } from '../../src/models/factories/MoveFactory.ts';

export const moves = [
    {
        moves: [[scissor, rock]],
        expected: 'Player 2',
    },
    {
        moves: [
            [rock, scissor],
            [spock, paper],
        ],
        expected: 'Tie',
    },
    {
        moves: [
            [rock, scissor],
            [spock, paper],
            [lizard, spock],
        ],
        expected: 'Player 1',
    },
    {
        moves: [
            [lizard, lizard],
            [spock, spock],
            [rock, rock],
            [scissor, scissor],
            [paper, paper],
        ],
        expected: 'Tie',
    },
    {
        moves: [
            [lizard, paper],
            [paper, rock],
            [rock, scissor],
            [scissor, lizard],
            [spock, rock],
        ],
        expected: 'Player 1',
    },
];
