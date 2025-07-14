import { Commit } from '../../../models/Commit.ts';
import { CommitSchema } from '../schemas/commit.ts';

export class AdapterCommit {
    constructor(private readonly commitSchema: CommitSchema[]) {}

    public toDomain(): Commit[] {
        return this.commitSchema.map(
            ({ sha, commit }) => new Commit(sha, commit.author.name, commit.message, commit.author.date)
        );
    }
}
