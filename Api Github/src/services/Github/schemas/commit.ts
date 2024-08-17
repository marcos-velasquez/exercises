export interface CommitSchema {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
    author: CommitSchemaAuthor;
    committer: CommitSchemaAuthor;
    parents: Parent[];
}

export interface CommitSchemaAuthor {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: Type;
    site_admin: boolean;
}

export enum Type {
    User = 'User',
}

export interface Commit {
    author: CommitAuthor;
    committer: CommitAuthor;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
}

export interface CommitAuthor {
    name: string;
    email: string;
    date: Date | string;
}

export interface Tree {
    sha: string;
    url: string;
}

export interface Verification {
    verified: boolean;
    reason: Reason;
    signature: null | string;
    payload: null | string;
}

export enum Reason {
    Unsigned = 'unsigned',
    Valid = 'valid',
}

export interface Parent {
    sha: string;
    url: string;
    html_url: string;
}
