import { TreeFactory } from '../../../src/models/factories/TreeFactory';
import { Random } from '../../../src/utils/Random';

export class TreeFactoryBuilder {
    public static readonly MIN_AMOUNT = TreeFactory.MIN_AMOUNT;
    private maxPosition = 10;

    public withMaxPosition(maxPosition: number) {
        this.maxPosition = maxPosition;
        return this;
    }

    public withInvalidMaxPosition() {
        this.maxPosition = TreeFactory.MIN_POSITION - 1;
        return this;
    }

    public withMinAmount() {
        this.maxPosition = TreeFactory.MIN_AMOUNT;
        return this;
    }

    public build() {
        return new TreeFactory(this.maxPosition);
    }
}
