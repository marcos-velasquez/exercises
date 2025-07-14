import { faker } from '@faker-js/faker';
import { AspectRatioCalculator } from './models/AspectRatioCalculator.ts';
import { URLFetcherAxios } from './services/URLFetcher.ts';

(async () => {
    const calculator = new AspectRatioCalculator(new URLFetcherAxios());
    const url = faker.image.url();
    const aspectRatio = await calculator.calculate(url);
    console.log(aspectRatio);
})();
