import { Dimension } from '../types/Dimension.ts';

export interface URLFetcher {
    fetch(url: string): Promise<Dimension>;
}
