export interface Fetcher {
    get<T>(url: string): Promise<T>;
}
