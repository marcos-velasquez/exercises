export const Position = {
    MAIN_DIAGONAL: [
        [0, 0],
        [1, 1],
        [2, 2],
    ],
    SECONDARY_DIAGONAL: [
        [0, 2],
        [1, 1],
        [2, 0],
    ],
    HORIZONTAL_FIRST: [
        [0, 0],
        [0, 1],
        [0, 2],
    ],
    HORIZONTAL_SECOND: [
        [1, 0],
        [1, 1],
        [1, 2],
    ],
    HORIZONTAL_THIRD: [
        [2, 0],
        [2, 1],
        [2, 2],
    ],
    VERTICAL_FIRST: [
        [0, 0],
        [1, 0],
        [2, 0],
    ],
    VERTICAL_SECOND: [
        [0, 1],
        [1, 1],
        [2, 1],
    ],
    VERTICAL_THIRD: [
        [0, 2],
        [1, 2],
        [2, 2],
    ],
} as Readonly<{ [key: string]: number[][] }>;
