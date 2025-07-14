import { Fetcher } from './services/Fetcher.ts';

(async () => {
    const url = 'https://api.disneyapi.dev/characters/112';
    const data = await Fetcher.get(url);
    console.log(`${url}`);
    console.log(data);
})();
