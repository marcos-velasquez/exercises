import { NativeFetcher } from './services/Fetcher.ts';
import { GithubService } from './services/Github/GithubService.ts';

(async () => {
    const service = new GithubService(new NativeFetcher());
    const commits = await service.setUser('mouredev').setRepo('retos-programacion-2023').setPerPage(10).getCommits();
    commits.forEach((commit, index) => console.log(`-${index + 1} (${commit.toArray().join(' | ')})`));
})();
