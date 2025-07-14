import assert from 'assert';
import { URLFetcher } from './URLFetcher.ts';
import { Calculator } from '../utils/Calculator.ts';

export class AspectRatioCalculator {
    constructor(private readonly urlFetcher: URLFetcher) {}

    public async calculate(url: string): Promise<string> {
        assert(url, 'URL is required');
        const { width, height } = await this.urlFetcher.fetch(url);
        const divisor = Calculator.calculateGCD(width, height);
        const widthRatio = width / divisor;
        const heightRatio = height / divisor;
        return `${widthRatio}:${heightRatio}`;
    }
}
