import { Dimension } from '../../src/types/Dimension';
import { URLBuilder } from '../builders/URLBuilder';
import { AspectRatioCalculator } from '../../src/models/AspectRatioCalculator';

describe('AspectRatioCalculator', () => {
    it.each([
        { dimension: new Dimension(1920, 1080), expected: '16:9' },
        { dimension: new Dimension(1080, 1080), expected: '1:1' },
        { dimension: new Dimension(720, 1080), expected: '2:3' },
        { dimension: new Dimension(1080, 720), expected: '3:2' },
        { dimension: new Dimension(720, 720), expected: '1:1' },
        { dimension: new Dimension(640, 480), expected: '4:3' },
        { dimension: new Dimension(480, 640), expected: '3:4' },
        { dimension: new Dimension(640, 360), expected: '16:9' },
        { dimension: new Dimension(360, 640), expected: '9:16' },
    ])('should calculate aspect ratio when dimension is $dimension', async ({ dimension, expected }) => {
        const url = new URLBuilder().withDimension(dimension).build();
        const fetcher = { fetch: () => Promise.resolve(dimension) };
        const aspectRatio = await new AspectRatioCalculator(fetcher).calculate(url);
        expect(aspectRatio).toBe(expected);
    });

    it('should throw an error if the url is empty', async () => {
        const url = '';
        const fetcher = { fetch: () => Promise.resolve(new Dimension(1920, 1080)) };
        await expect(new AspectRatioCalculator(fetcher).calculate(url)).rejects.toThrow();
    });
});
