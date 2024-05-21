import axios from 'axios';
import { imageSize } from 'image-size';
import { URLFetcher } from '../models/URLFetcher.ts';
import { Dimension } from '../types/Dimension.ts';

export class URLFetcherAxios implements URLFetcher {
    public async fetch(url: string): Promise<Dimension> {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data, 'binary');
        const { width, height } = imageSize(buffer);
        return new Dimension(width!, height!);
    }
}
