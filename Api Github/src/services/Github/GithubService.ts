import assert from 'assert';
import { GithubParams } from './GithubParams.ts';
import { Commit } from '../../models/Commit.ts';
import { Fetcher } from '../../models/Fetcher.ts';
import { AdapterCommit } from './adapters/commit.ts';
import { CommitSchema } from './schemas/commit.ts';

export class GithubService {
    private readonly params = new GithubParams();

    constructor(private readonly fetcher: Fetcher) {}

    public setUser(user: string) {
        this.params.setUser(user);
        return this;
    }

    public setRepo(repo: string) {
        this.params.setRepo(repo);
        return this;
    }

    public setPerPage(perPage: number) {
        this.params.setPerPage(perPage);
        return this;
    }

    public getCommits() {
        assert(this.params.validate(), 'Invalid params');
        return new Promise<Commit[]>((resolve, reject) => {
            this.fetcher
                .get<CommitSchema[]>(this.params.toRequest('commits'))
                .then((data) => resolve(new AdapterCommit(data).toDomain()))
                .catch((error) => reject(new Error(error)));
        });
    }
}
