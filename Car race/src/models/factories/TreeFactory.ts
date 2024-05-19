import assert from 'assert';
import { Random } from '../../utils/Random.ts';
import { Tree } from '../Tree.ts';

export class TreeFactory {
    public static readonly MIN_POSITION = 1;
    public static readonly MIN_AMOUNT = 1;
    public static readonly MAX_AMOUNT = 3;

    constructor(private readonly maxPosition: number) {
        assert(maxPosition >= TreeFactory.MIN_POSITION);
    }

    public create(): Tree[] {
        const amount = Random.number(TreeFactory.MIN_AMOUNT, Math.min(TreeFactory.MAX_AMOUNT, this.maxPosition));
        const trees: Tree[] = [];
        while (trees.length < amount) {
            const position = Random.number(TreeFactory.MIN_POSITION, this.maxPosition);
            const newTree = new Tree(position);
            if (trees.every((tree) => !tree.isAtPosition(newTree.position))) {
                trees.push(newTree);
            }
        }
        return trees;
    }
}
