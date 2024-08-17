import { GithubService } from '../../src/services/Github/GithubService';
import { Fetcher } from '../../src/models/Fetcher';
import { generateMockCommitSchema } from '../data/commit.schema';
import { Commit } from '../../src/models/Commit';

let mockedFetcher: Fetcher;
let service: GithubService;

beforeEach(() => {
    mockedFetcher = { get: jest.fn().mockImplementation(() => Promise.resolve(generateMockCommitSchema(10))) };
    service = new GithubService(mockedFetcher);
});

describe('GithubService', () => {
    it('should fetch commits of repositories from github', async () => {
        const repositories = await service
            .setUser('mouredev')
            .setRepo('retos-programacion-2023')
            .setPerPage(10)
            .getCommits();
        expect(repositories.length).toBe(10);
        repositories.forEach((commit) => expect(commit).toBeInstanceOf(Commit));
    });

    it('should fetch data with correct url', async () => {
        await service.setUser('mouredev').setRepo('retos-programacion-2023').setPerPage(5).getCommits();
        expect(mockedFetcher.get).toHaveBeenCalledWith(
            'https://api.github.com/repos/mouredev/retos-programacion-2023/commits?per_page=5'
        );
    });

    it('should return an error if params are invalid', async () => {
        expect(() => new GithubService(mockedFetcher).getCommits()).toThrow('Invalid params');
        expect(() => new GithubService(mockedFetcher).setUser('mouredev').getCommits()).toThrow();
        expect(() => new GithubService(mockedFetcher).setRepo('retos-programacion-2023').getCommits()).toThrow();
        expect(() =>
            new GithubService(mockedFetcher)
                .setUser('mouredev')
                .setRepo('retos-programacion-2023')
                .setPerPage(0)
                .getCommits()
        ).toThrow();
    });

    afterAll(() => jest.restoreAllMocks());
});
