import { faker } from '@faker-js/faker';
import { Dimension } from '../../src/types/Dimension';

export class URLBuilder {
    private url = faker.image.url();

    public withDimension(dimension: Dimension) {
        this.url = faker.image.url(dimension);
        return this;
    }

    public build() {
        return this.url;
    }
}
