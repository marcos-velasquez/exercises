import { faker } from '@faker-js/faker';
import { CommitSchema, Reason, Type } from '../../src/services/Github/schemas/commit';

export const generateMockCommitSchema = (amount = 1): CommitSchema[] => {
    return new Array(amount).fill(0).map(() => ({
        sha: faker.git.commitSha(),
        node_id: faker.string.uuid(),
        commit: {
            author: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                date: faker.date.recent().toISOString(),
            },
            committer: {
                name: faker.name.fullName(),
                email: faker.internet.email(),
                date: faker.date.recent().toISOString(),
            },
            message: faker.git.commitMessage(),
            tree: {
                sha: faker.git.commitSha(),
                url: faker.internet.url(),
            },
            url: faker.internet.url(),
            comment_count: faker.number.int({ min: 0, max: 100 }),
            verification: {
                verified: faker.datatype.boolean(),
                reason: [Reason.Valid, Reason.Valid][faker.number.int({ min: 0, max: 1 })] as Reason,
                signature: faker.git.commitSha(),
                payload: faker.lorem.paragraphs(),
            },
        },
        url: faker.internet.url(),
        html_url: faker.internet.url(),
        comments_url: faker.internet.url(),
        author: {
            login: faker.internet.userName(),
            id: faker.number.int({ min: 0, max: 100 }),
            node_id: faker.string.uuid(),
            avatar_url: faker.image.avatar(),
            gravatar_id: '',
            url: faker.internet.url(),
            html_url: faker.internet.url(),
            followers_url: faker.internet.url(),
            following_url: faker.internet.url(),
            gists_url: faker.internet.url(),
            starred_url: faker.internet.url(),
            subscriptions_url: faker.internet.url(),
            organizations_url: faker.internet.url(),
            repos_url: faker.internet.url(),
            events_url: faker.internet.url(),
            received_events_url: faker.internet.url(),
            type: 'User' as Type,
            site_admin: faker.datatype.boolean(),
        },
        committer: {
            login: faker.internet.userName(),
            id: faker.datatype.number(),
            node_id: faker.string.uuid(),
            avatar_url: faker.image.avatar(),
            gravatar_id: '',
            url: faker.internet.url(),
            html_url: faker.internet.url(),
            followers_url: faker.internet.url(),
            following_url: faker.internet.url(),
            gists_url: faker.internet.url(),
            starred_url: faker.internet.url(),
            subscriptions_url: faker.internet.url(),
            organizations_url: faker.internet.url(),
            repos_url: faker.internet.url(),
            events_url: faker.internet.url(),
            received_events_url: faker.internet.url(),
            type: 'User' as Type,
            site_admin: faker.datatype.boolean(),
        },
        parents: [
            {
                sha: faker.git.commitSha(),
                url: faker.internet.url(),
                html_url: faker.internet.url(),
            },
            {
                sha: faker.git.commitSha(),
                url: faker.internet.url(),
                html_url: faker.internet.url(),
            },
        ],
    }));
};
