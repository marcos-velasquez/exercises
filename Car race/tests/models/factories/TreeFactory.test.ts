import { TreeFactoryBuilder } from '../builders/TreeFactoryBuilder';

describe('TreeFactory', () => {
    it('should create an instance', () => {
        expect(new TreeFactoryBuilder().build()).toBeTruthy();
    });

    it('give a max position when created then should create trees at max position', () => {
        [3, 4, 5, 6, 7, 8, 9, 110].forEach((position) => {
            new TreeFactoryBuilder()
                .withMaxPosition(position)
                .build()
                .create()
                .forEach((tree) => expect(tree.position).toBeLessThanOrEqual(position));
        });
    });

    it('give a max position when created then should create trees with different positions', () => {
        [3, 4, 5, 6, 7, 8, 9, 110].forEach((position) => {
            const trees = new TreeFactoryBuilder().withMaxPosition(position).build().create();
            const noDuplicatedPositions = new Set(trees.map((tree) => tree.position));
            expect(trees.length).toBe(noDuplicatedPositions.size);
        });
    });

    it('give an invalid max position when created then should throw an error', () => {
        expect(() => new TreeFactoryBuilder().withInvalidMaxPosition().build()).toThrow();
    });

    it('give max position equal min amount when created then should position be equal to min amount', () => {
        new TreeFactoryBuilder()
            .withMinAmount()
            .build()
            .create()
            .forEach((tree) => expect(tree.position).toBe(TreeFactoryBuilder.MIN_AMOUNT));
    });
});
