import { Block } from './Block.ts';

export class WaterContainer {
    static calculateTrappedWaterUnits(container: number[]): number {
        const blocks = container.map((value) => new Block(value));
        let left = 0;
        let right = blocks.length - 1;
        let leftMaxBlock = new Block(0);
        let rightMaxBlock = new Block(0);
        let units = 0;

        while (left <= right) {
            if (blocks[left].isLessThanOrEqualTo(blocks[right])) {
                leftMaxBlock = blocks[left].getMaxBlock(leftMaxBlock);
                if (blocks[left] !== leftMaxBlock) {
                    units += blocks[left].calculateWaterAboveComparedTo(leftMaxBlock);
                }
                left++;
            } else {
                rightMaxBlock = blocks[right].getMaxBlock(rightMaxBlock);
                if (blocks[right] !== rightMaxBlock) {
                    units += blocks[right].calculateWaterAboveComparedTo(rightMaxBlock);
                }
                right--;
            }
        }

        return units;
    }
}
