import assert from 'assert';

export class DateString {
    constructor(public readonly value: string = DateString.today()) {
        assert(/^\d{1,2}\/\d{1,2}\/\d{4}$/.exec(this.value), 'Invalid date');
    }

    private static today() {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    public toDate() {
        return new Date(this.year, this.month - 1, this.day);
    }

    public differenceInDays(date: DateString) {
        const diffTime = Math.abs(date.toDate().getTime() - this.toDate().getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    private get day() {
        return Number(this.value.split('/')[0]);
    }

    private get month() {
        return Number(this.value.split('/')[1]);
    }

    private get year() {
        return Number(this.value.split('/')[2]);
    }
}
