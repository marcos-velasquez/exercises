export class GithubParams {
    private user: string | null = null;
    private repo: string | null = null;
    private perPage = 10;

    public setUser(user: string) {
        this.user = user;
        return this;
    }

    public setRepo(repo: string) {
        this.repo = repo;
        return this;
    }

    public setPerPage(perPage: number) {
        this.perPage = perPage;
        return this;
    }

    public validate() {
        return !!this.user && !!this.repo && this.perPage > 0;
    }

    public toRequest(pathname: string) {
        return `https://api.github.com/repos/${this.user}/${this.repo}/${pathname}?per_page=${this.perPage}`;
    }
}
