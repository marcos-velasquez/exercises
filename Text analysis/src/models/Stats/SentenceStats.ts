export class SentenceStats {
    private stats = { total: 0 };

    public incrementTotal() {
        this.stats.total += 1;
    }

    public incrementTotalIf(condition: boolean) {
        if (condition) {
            this.incrementTotal();
        }
    }

    public get total() {
        return this.stats.total;
    }

    public values() {
        return { ...this.stats };
    }
}
