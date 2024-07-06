export class Fetcher {
    public static async get(url: string) {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
}
