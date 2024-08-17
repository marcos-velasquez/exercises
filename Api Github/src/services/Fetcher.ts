import { Fetcher } from '../models/Fetcher.ts';

export class NativeFetcher implements Fetcher {
    public async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const data = await response.json();
        return data as T;
    }
}
